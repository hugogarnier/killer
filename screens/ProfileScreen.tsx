import React, {FC, useContext, useEffect, useState} from 'react';
import {getAuth, signOut} from 'firebase/auth';

import {StatusBar} from 'expo-status-bar';

import {Button, Column, KText, Layout} from '@ui-kit';
import {UserContext} from "@contexts";
import {RootStackScreenProps} from "@types";
import {collection, getFirestore, onSnapshot} from "firebase/firestore";
import {Game, Player} from "@customTypes";
import ListGame from "@components/ListGame";
import {ActivityIndicator, FlatList} from "react-native";
import NoParty from "@assets/svg/NoParty";
import {useIsFocused} from "@react-navigation/native";
import {colors} from "@theme";


const logout = async () => {
  const {user, setUser} = useContext(UserContext);
  const auth = getAuth();
  try {
    await signOut(auth);
    setUser({uid: '', displayName: ''});

  } catch (error) {
    console.log(error);
  }
};


const ProfileScreen: FC<RootStackScreenProps<'Profile'>> = ({navigation}) => {
  const {user, setUser} = useContext(UserContext);
  const isFocused = useIsFocused()
  const [currentGames, setCurrentGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const db = getFirestore();

  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser({uid: '', displayName: ''});

    } catch (error) {
      console.log(error);
    }
  };

  const unsubscribe = () =>
    onSnapshot(collection(db, 'games'), (querySnapshot) => {
      const games: Game[] = [];
      querySnapshot.forEach((doc) => {
        doc.data().players.map((player: Player) => {
          // filter only game over
          if (player.id === user.uid && doc.data().gameOver) {
            games.push(doc.data() as Game);
          }
        });
      });
      //const gamesSorted = games.sort((a, b) => Number(b.started) - Number(a.started));
      setCurrentGames(games);
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
      <Column style={{flex: .6, marginTop: 30}}>
        <Button size="small" onPress={logout}>
          <KText variant="button3" align="center" color="light">
            SE DECONNECTER
          </KText>
        </Button>
      </Column>
      <Column style={{flex: 5}}>
        <Column style={{flex: 1}}>
          <KText variant="h2" style={{paddingVertical: 20}}>Historique</KText>
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
              <KText variant="h4" spacing={50} align={'center'}>Vous n'avez participé à aucune une partie</KText>
            </Column>
          )}
        </Column>

      </Column>

    </Layout>
  );
};

export default ProfileScreen;
