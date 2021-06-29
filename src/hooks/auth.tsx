//createContext is the library that will allow us to create a centralized context(user data)
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

//elements to build the url
const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

import { api } from "../services/api";
import { COLLECTION_USERS } from "../configs/storage";

//type to store the user 
type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string; //from api to authenticate the user
};

//data that will be shared from state
type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps){
    const [ user, setUser ] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn(){
        try{
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;

            if(type === "success" && !params.error){
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;

                const userInfo = await api.get('/users/@me');
                const firstName = userInfo.data.username.split(' ')[0];

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
                
                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }

                await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
                
                setUser(userData);   
            }   
        } catch{
            throw new Error('Erro ao autenticar');
        } finally {
            setLoading(false);
        }
    }

    async function signOut(){
        setUser({} as User);
        await AsyncStorage.removeItem(COLLECTION_USERS);
    }

    async function loadUserStorageData(){
        const storage = await AsyncStorage.getItem(COLLECTION_USERS);

        if(storage){
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

            setUser(userLogged);
        }
    }

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return(
        <AuthContext.Provider value={{
            user, signIn, loading, signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };

