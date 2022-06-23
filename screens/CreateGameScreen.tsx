import React, {FC, useContext, useState} from 'react';

import {StatusBar} from 'expo-status-bar';

import {Button, KText, KTextInput, Layout} from '@ui-kit';
import {RootStackScreenProps} from "@types";
import {UserContext} from "@contexts";
import {createGame} from "../api";

const CreateGameScreen: FC<RootStackScreenProps<'Create'>> = ({navigation}) => {
  const {user} = useContext(UserContext);
  const [title, setTitle] = useState<string>('')
  const [code, setCode] = useState<string>('')

  const handleCreateGame = async () => {
    //if (isCreateGame) {
    const result = await createGame(title, user.uid, user.displayName);
    // console.log(result);
    setTitle('');
    navigation.navigate('Game', {
      result,
      name: `Partie de ${user.displayName} - Code ${result}`,
    });
    //} else {
    //  const result = await joinGame(title, user.uid, user.displayName);
    // console.log(result);
    //  setTitle('');
    // setModalVisible(!modalVisible);
    // navigation.navigate('Game', {
    //   result,
    //   name: `Partie de ${user.displayName} - Code ${result}`,
    // });
    //}
  };

  return (
    <Layout logged>
      <StatusBar style="dark"/>
      <KTextInput
        placeholder="titre de la partie"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button onPress={handleCreateGame}><KText color={'light'}>Créer une partie</KText></Button>
      <KTextInput
        placeholder="code de la partie"
        value={code}
        onChangeText={(text) => setCode(text)}
      />

      <KText variant="body2">Create Game</KText>
    </Layout>
  );
};

export default CreateGameScreen;
