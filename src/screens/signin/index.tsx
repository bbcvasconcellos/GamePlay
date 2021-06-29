import React from 'react';
import {View, Text, Image, Alert, ActivityIndicator} from 'react-native';

import { useAuth } from '../../hooks/auth';

import {styles} from './styles';
import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/buttonicon';
import { Background } from "../../components/background";
import { theme } from '../../global/styles/theme';


export function SignIn(){
    const { loading, signIn } = useAuth();
    //function to direct the user to the home screen
    async function handleSignIn(){
        try{
            await signIn();
        } 
        catch(error){
            Alert.alert(error);
        }
    }
    
    return(
        <Background>
        <View style={styles.container}>
            <Image source={IllustrationImg}
                    style={styles.image}
                    resizeMode = 'stretch' //adjusts the background image to better fit the screen 
            /> 
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize suas{`\n`}
                    jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos!
                </Text>
                {
                    loading ? <ActivityIndicator color={theme.color.primary} />:
                    
                    <ButtonIcon 
                    title='Entrar com Discord'
                    onPress={handleSignIn}
                />   
                }      
            </View>
        </View>
        </Background>
    );
}
