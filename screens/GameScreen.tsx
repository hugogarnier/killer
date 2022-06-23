import React, {FC, useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {RootStackScreenProps} from "@types";
import {UserContext} from "@contexts";
import {doc, getFirestore, onSnapshot} from "firebase/firestore";

const GameScreen: FC<RootStackScreenProps<'Game'>> = ({route}) => {
  const {user} = useContext(UserContext);
  const db = getFirestore();
  const [game, setGame] = useState();
  const [players, setPlayers] = useState();
  const [activePlayer, setActivePlayer] = useState();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'games', route.params.result), (doc) => {
      const allPlayers = [];
      doc.data().players.map((player) => {
        return allPlayers.push(player);
      });
      const currentPlayer = doc.data().players.find((player) => player.id === user.uid);
      setPlayers(allPlayers);
      setGame(doc.data());
      setActivePlayer(currentPlayer);
      console.log("Current data: ", doc.data());
    });
    return () => {
      unsub;
    };
  }, []);

  // const renderItem = ({ item }) => <Text>{item.username}</Text>;

  return (
    <View>
      <Text>dsqdqd</Text>
    </View>
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
