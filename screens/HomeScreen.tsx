import React, {FC, useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useIsFocused} from "@react-navigation/native";
import {StatusBar} from 'expo-status-bar';
import {collection, getFirestore, onSnapshot} from 'firebase/firestore';

import {UserContext} from '@contexts';
import {Game, Player} from '@customTypes';
import {RootStackScreenProps} from "@types";
import {Column, KText, Layout} from '@ui-kit';

import NoParty from '../assets/svg/NoParty'
import ListGame from '../components/ListGame';
import {colors} from "@theme";

const HomeScreen: FC<RootStackScreenProps<'Home'>> = () => {
  const {user} = useContext(UserContext);
  const isFocused = useIsFocused()
  const [currentGames, setCurrentGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  const db = getFirestore();

  const unsubscribe = () =>
    onSnapshot(collection(db, 'games'), (querySnapshot) => {
      const games: Game[] = [];
      querySnapshot.forEach((doc) => {
        doc.data().players.map((player: Player) => {
          // filter only not game over
          if (player.id === user?.uid && !doc.data().gameOver) {
            games.push(doc.data() as Game);
          }
        });
      });
      const gamesSorted = games.sort((a, b) => Number(b.started) - Number(a.started));
      setCurrentGames(gamesSorted);
      setLoading(false)
    });

  useEffect(() => {
    if (isFocused) {
      unsubscribe();
    }
    return () => {
      unsubscribe()
    }
  }, [isFocused]);

  const renderItem = ({item}: { item: Game }) => {
    return (
      <>
        <ListGame item={item}/>
      </>
    );
  };

  return (
    <Layout logged>
      <StatusBar style="dark"/>
      {loading && <ActivityIndicator size="large" color={colors.primary}/> || (!!currentGames.length && (
        <FlatList
          data={currentGames}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
          showsVerticalScrollIndicator={false}
        />
      )) || (
        <Column>
          <NoParty width={300}/>
          <KText variant="h4" spacing={50} align={'center'}>Vous ne participez pas encore à une partie</KText>
        </Column>
      )}
    </Layout>
  );
};

export default HomeScreen;
