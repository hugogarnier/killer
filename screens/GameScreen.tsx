import React, {FC, useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ImageBackground, Share, View} from 'react-native';

import {RootStackScreenProps} from "@types";
import {UserContext} from "@contexts";
import {doc, getFirestore, onSnapshot} from "firebase/firestore";
import {Game, Player} from "@customTypes";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {Button, Column, KText, Layout} from "@ui-kit";
import {colors, layout} from "@theme";
import {killPlayer, startGame} from "@api";
import {FontAwesome} from "@expo/vector-icons";

const GameScreen: FC<RootStackScreenProps<'Game'>> = ({route}) => {
  const {user} = useContext(UserContext);
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const db = getFirestore();
  const [game, setGame] = useState<Game>({} as Game);
  const [players, setPlayers] = useState<Player[]>([]);
  const [activePlayer, setActivePlayer] = useState<Player>({} as Player);
  const [loading, setLoading] = useState<boolean>(true)

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: route.params.result,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: typeof error) {
      alert(error.message);
    }
  };

  const unsubscribe = () =>
    onSnapshot(doc(db, 'games', route.params.result), (doc) => {
      const allPlayers: Player[] = [];
      const data = doc.data()
      if (data) {
        data.players.map((player: Player) => {
          return allPlayers.push(player);
        });
        const currentPlayer: Player = data.players.find((player: Player) => player.id === user.uid);
        setPlayers(allPlayers);
        setGame(data as Game);
        setActivePlayer(currentPlayer);
        setLoading(false)
      }
    });

  useEffect(() => {
    if (isFocused) {
      unsubscribe();
    }
    return () => {
      unsubscribe()
    }
  }, [isFocused]);

  const renderItem = ({item}: { item: Player }) =>
    <>
      <View style={{flex: 1, padding: 10}}><KText variant={'body1'}>{item.username}</KText></View>
    </>;

  const playerAlive = game?.players?.filter((player) => player.alive)

  const isMoreThanOnePlayer = players.length < 2

  return (
    <Layout>

      {
        (!game.gameOver) &&
          <Column style={{
            alignItems: 'flex-start',
            marginTop: 80
          }}>
              <FontAwesome name="chevron-left" size={20} onPress={() => navigation.goBack()}/>
          </Column>
      }
      {loading && <ActivityIndicator size="large" color={colors.primary}/> || !game.started && (
          <Column style={{flex: 2}}>
            <View style={{flexDirection: 'row'}}>
              <KText variant={'h3'} style={{paddingRight: 20, marginBottom: 30}}>{route.params.result}</KText>
              <FontAwesome name="share-alt" size={30} color={colors.primary} onPress={onShare}/>
            </View>
            <KText variant={'h4'}>Liste des joueurs</KText>
            <FlatList data={players} renderItem={renderItem}
                      keyExtractor={(item: Player) => item.id} style={{flex: 3}}/>
            <View style={{
              flex: 1,
              justifyContent: 'center',
            }}>
              {game.admin === user.uid &&
                  <Button variant={isMoreThanOnePlayer && 'tertiary' || 'primary'} padding={20}
                          onPress={() => startGame(route.params.result)} disabled={isMoreThanOnePlayer}>
                      <KText variant={'button1'} color={'light'}>Démarrer la partie</KText>
                  </Button>}
            </View>
          </Column>)
        || (game.gameOver && activePlayer.id === user.uid && activePlayer.winner &&
          (<View>
            <KText>🏆🏆 Félicitations tu as gagné ! 🏆🏆</KText>
          </View>)
          || (game.gameOver && !activePlayer.winner) &&
          (<><KText>
            Le(a) gagnant(e) est {players.find((player) => player.alive)?.username}
          </KText></>)
          || <Column style={{flex: 1}}>
                  <ImageBackground source={{uri: game.uriImage}} style={{
                    width: '100%', height: 200, justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20
                  }} imageStyle={{borderRadius: layout.radius.Nxl, opacity: 0.6}}>
                      <View style={{
                        borderRadius: layout.radius.Nxl,
                        marginBottom: 20,
                        padding: 20,
                        backgroundColor: colors.primary,
                        marginTop: 10,
                      }}>
                          <KText variant={'body1'} color={'light'} numberOfLines={1}>{game.title}</KText>
                      </View>
                      <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: colors['light-50'],
                        borderRadius: layout.radius.Nxl,

                      }}>
                          <KText variant={'body1'} numberOfLines={1}>Joueurs encore en vie</KText>
                          <KText variant={'h2'} numberOfLines={1}>{playerAlive.length}</KText>
                      </View>
                  </ImageBackground>

                  <Column style={{flex: 1}}>
                      <View style={{
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                        height: 200,
                        borderRadius: layout.radius.Nxl,
                        backgroundColor: colors.light,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                      }}>
                          <View style={{
                            borderRadius: layout.radius.Nxl,
                            padding: 20,
                            backgroundColor: colors.secondary,
                            marginTop: 20,
                            marginBottom: 10,
                          }}><KText>{activePlayer.playerToKill}</KText></View>
                          <KText numberOfLines={2} style={{
                            marginBottom: 20,
                            padding: 20,
                          }}>{activePlayer.action}</KText>
                      </View>
                  </Column>
                  <Column style={{flex: 1}}>
                      <Button onPress={() => killPlayer(route.params.result, user.uid)} padding={20}><KText
                          variant='button1' color={'light'}>TUER LE JOUEUR</KText></Button>
                  </Column>
              </Column>)}
    </Layout>
  );
};

export default GameScreen;
