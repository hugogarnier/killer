import React, {FC, useContext, useState} from 'react';

import {StatusBar} from 'expo-status-bar';

import {Button, Column, KText, KTextInput, Layout} from '@ui-kit';
import {RootStackScreenProps} from "@types";
import {UserContext} from "@contexts";
import {createGame, joinGame} from "@api";
import Choice from "@assets/svg/Choice";
import {KeyboardAvoidingView, Platform, ScrollView} from "react-native";


const CreateGameScreen: FC<RootStackScreenProps<'Create'>> = ({navigation}) => {
  const {user} = useContext(UserContext);
  const [title, setTitle] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [errorTitle, setErrorTitle] = useState<string>('')
  const [errorCode, setErrorCode] = useState<string>('')

  console.log(user)
  const handleCreateGame = async () => {
    if (user) {
      const result = await createGame(title, user.uid, user.displayName);
      if (result.length === 5) {
        setTitle('');
        navigation.navigate('Game', {
          result,
          name: `Partie de ${user.displayName} - Code ${result}`,
        });
      } else {
        setTitle('');
        setErrorTitle('Erreur veuillez réessayer')
      }
    } else {
      // do nothing
    }
  };

  const handleJoinGame = async () => {
    if (user) {
      const result = await joinGame(code, user.uid, user.displayName);
      if (result === 'not-found' || result === 'invalid-argument') {
        setCode('');
        setErrorCode('Code invalide')
        return null
      }
      if (result !== 'not-found' || result !== 'invalid-argument') {
        setCode('');
        navigation.navigate('Game', {
          result,
          name: `Partie de ${user.displayName} - Code ${result}`,
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1, marginTop: 30}}>
      <ScrollView>
        <Layout logged>
          <StatusBar style="dark"/>
          <KTextInput
            placeholder="titre de la partie"
            value={title}
            onChangeText={(text) => {
              setTitle(text)
              setErrorTitle('')
            }}
            maxLength={15}
          />
          {errorTitle && <KText color={'warning'}>{errorTitle}</KText> || <></>}
          <Button onPress={handleCreateGame}><KText variant={'button2'} color={'light'}>Créer une
            partie</KText></Button>
          <Column spacingV={40}><Choice width={200}/></Column>
          <KTextInput
            placeholder="code de la partie"
            value={code}
            onChangeText={(text) => {
              setCode(text)
              setErrorCode('')
            }
            }
            maxLength={5}
            autoCapitalize={'characters'}
          />
          {errorCode && <KText color={'warning'}>{errorCode}</KText> || <></>}
          <Button variant='secondary' onPress={handleJoinGame}><KText variant={'button2'} color={'light'}>Rejoindre une
            partie</KText></Button>

        </Layout>
      </ScrollView>

    </KeyboardAvoidingView>
  );
};

export default CreateGameScreen;
