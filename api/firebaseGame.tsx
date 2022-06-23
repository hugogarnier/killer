import {arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc,} from 'firebase/firestore';
import ENV from "../constants/env";
import {Player} from "@customTypes";


export const createGame = async (title: string, uid: string, displayName: string | null) => {
  let uriImage = ''

  try {
    const db = getFirestore();
    const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    const randomNumber = Math.floor(Math.random() * 100);

    const response = await fetch(
      `${ENV.UNSPLASH_URL}${ENV.ACCESS_UNSPLASH}&topics=nature`
    );
    const json = await response.json();
    uriImage = json.urls['small']

    await setDoc(doc(db, 'games', randomCode), {
      title: title,
      code: randomCode,
      admin: uid,
      started: false,
      gameOver: false,
      players: [
        {
          randomNumber: randomNumber,
          id: uid,
          username: displayName,
          alive: true,
        },
      ],
      uriImage: uriImage
    });

    return randomCode;
  } catch (error: any) {
    return error.code;
  }
};

export const joinGame = async (code: string, uid: string, displayName: string | null) => {
  try {
    const db = getFirestore();
    const randomNumber = Math.floor(Math.random() * 100);
    const docRef = doc(db, 'games', code);
    // Atomically add a new player to the "players" array field.
    await updateDoc(docRef, {
      players: arrayUnion({
        randomNumber: randomNumber,
        id: uid,
        username: displayName,
        alive: true,
      }),
    });

    return code;
  } catch (error: any) {
    return error.code;
  }
};

export const startGame = async (code: string) => {
  try {
    const db = getFirestore();
    const docGame = doc(db, 'games', code);
    const docActions = doc(db, 'actions', 'currentActions');
    const docSnapActions = await getDoc(docActions);
    const docPlayers = await getDoc(docGame);
    const data = docPlayers.data()
    const snapData = docSnapActions.data()

    if (data) {
      const players: Player[] = data.players;

      players.sort((a, b) => {
        if (a.randomNumber < b.randomNumber) return -1;
        if (a.randomNumber > b.randomNumber) return 1;
        return 0;
      });

      let userIndex = 0;
      const tabRandomNumber: number[] = [];
      if (snapData) {
        players.map((player) => {
          let randomNumber = Math.floor(Math.random() * snapData.actions.length);
          if (tabRandomNumber.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * snapData.actions.length);
          }
          tabRandomNumber.push(randomNumber);

          if (players.length - 1 === userIndex) {
            player.playerToKill = players[0].username;
            player.playerToKillId = players[0].id;
            player.action = snapData.actions[randomNumber];
          } else {
            player.playerToKill = players[userIndex + 1].username;
            player.playerToKillId = players[userIndex + 1].id;
            player.action = snapData.actions[randomNumber];
            userIndex++;
          }
        });
      }


      await setDoc(
        docGame,
        {
          players: players,
          started: true,
        },
        {merge: true},
      );

      return true;
    }
    return false;
  } catch (error: any) {
    return error.code;
  }
};

export const killPlayer = async (code: string, uid: string) => {
  try {
    const db = getFirestore();
    const docGame = doc(db, 'games', code);
    const docPlayers = await getDoc(docGame);
    const data = docPlayers.data()
    if (data) {
      const players = data.players;
      const playerActive = players.filter((player: Player) => player.id === uid);
      const playerKilled = players.filter((player: Player) => player.id === playerActive[0].playerToKillId);

      players.map((player: Player) => {
        if (player.id === playerActive[0].id) {
          player.action = playerKilled[0].action;
          player.playerToKill = playerKilled[0].playerToKill;
          player.playerToKillId = playerKilled[0].playerToKillId;
        } else if (player.id === playerKilled[0].id) {
          player.alive = false;
        }
      });

      const isWinner = players.filter((player: Player) => player.alive);

      if (isWinner.length < 2) {
        players.map((player: Player) => {
          if (player.id === isWinner[0].id) {
            player.winner = true;
          }
        });
        await setDoc(
          docGame,
          {
            players: players,
            gameOver: true,
          },
          {merge: true},
        );
      } else {
        await setDoc(
          docGame,
          {
            players: players,
          },
          {merge: true},
        );
      }
      return true;
    }
    return false;
  } catch (error: any) {
    return error.code;
  }
};
