import React, {FC, useContext, useEffect, useMemo, useState} from 'react';
import {FlatList, ImageBackground, Platform, StyleSheet, View} from 'react-native';

import {RootStackScreenProps} from "@types";
import {UserContext} from "@contexts";
import {doc, getFirestore, onSnapshot} from "firebase/firestore";
import {Game, Player} from "@customTypes";
import {useIsFocused} from "@react-navigation/native";
import {Button, Column, KText, Layout} from "@ui-kit";
import {colors, layout} from "@theme";
import {killPlayer} from "@api";

const GameScreen: FC<RootStackScreenProps<'Game'>> = ({route}) => {
  const {user} = useContext(UserContext);
  const isFocused = useIsFocused()
  const db = getFirestore();
  const [game, setGame] = useState<Game>({} as Game);
  const [players, setPlayers] = useState<Player[]>([]);
  const [activePlayer, setActivePlayer] = useState<Player>({} as Player);

  useEffect(() => {
    if (isFocused) {
      onSnapshot(doc(db, 'games', route.params.result), (doc) => {
        const allPlayers: Player[] = [];
        if (user) {
          doc.data().players.map((player: Player) => {
            return allPlayers.push(player);
          });
          const currentPlayer: Player = doc.data().players.find((player: Player) => player.id === user.uid);
          setPlayers(allPlayers);
          setGame(doc.data());
          setActivePlayer(currentPlayer);
        }
      });
    }
  }, [isFocused]);

  const renderItem = ({item}: { item: Player }) => <KText>{item.username}</KText>;

  const playerAlive = useMemo(() => {
    if (Object.keys(game).length) {
      return game.players.filter((player) => player.alive)
    }
    return []
  }, [game])

  return (
    <Layout>
      <Column style={{marginTop: ((Platform.OS === 'ios' && 44) || 20)}}><KText>Go Back</KText></Column>
      {(!game?.started && (
          <Column style={{flex: 1}}><FlatList data={players} renderItem={renderItem}
                                              keyExtractor={(item: Player) => item.id}/></Column>) ||
          <Column style={{flex: 1}}>
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
                  <Button onPress={() => killPlayer(route.params.result, user?.uid)} padding={20}><KText
                      variant='button1' color={'light'}>TUER LE JOUEUR</KText></Button>
              </Column>
          </Column>)
      }
    </Layout>

    // <View style={styles.container}>
    //   {(game?.gameOver && activePlayer?.id === uid && activePlayer?.winner && (
    //     <>
    //       <Text>Félicitations tu as gagné !</Text>
    //       <LottieView source={require('../assets/lottie/confetti.json')} autoPlay />
    //     </>
    //   )) ||
    //     (game?.gameOver && !activePlayer?.winner && (
    //       <>
    //         <LottieView
    //           source={require('../assets/lottie/gameOver.json')}
    //           autoPlay
    //           loop
    //           style={{ marginBottom: 200 }}
    //         />
    //         <Text>La partie est terminée</Text>
    //         <Text>
    //           Le(a) gagnant(e) est {players.find((player) => player.alive === true).username}
    //         </Text>
    //       </>
    //     )) ||
    //     (game?.started && !game?.gameOver && (
    //       <>
    //         <Text>Joueurs encore en jeu :{players.filter((player) => player.alive).length}</Text>
    //         <Text>Joueur à tuer: {activePlayer?.playerToKill}</Text>
    //         <Text>En lui faisant: {activePlayer?.action}</Text>
    //         <ButtonComponent
    //           onPress={() => killPlayer(route.params.result, uid)}
    //           title="Tuer le joueur"
    //         />
    //       </>
    //     )) ||
    //     (!game?.started && (
    //       <>
    //         <ButtonComponent
    //           onPress={() => startGame(route.params.result)}
    //           title="Lancer la partie"
    //         />
    //         <Text>Liste des joueurs</Text>
    //         <FlatList data={players} renderItem={renderItem} keyExtractor={(item) => item.id} />
    //       </>
    //     ))}
    // </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
