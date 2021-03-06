import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {CompositeNavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import {Game, Player} from '@customTypes';
import {RootStackParamList} from '@types';
import Card from '@ui-kit/Card';
import {KText} from "@ui-kit";
import {colors, layout} from "@theme";
import {FontAwesome} from '@expo/vector-icons';
import {width} from "@theme/layout";
import {UserContext} from "@contexts";

type ListGameNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<RootStackParamList, 'Game'>,
  StackNavigationProp<RootStackParamList>>;

const Win = () => {
  return (
    <KText variant={'h1'} style={styles.end}>🏆</KText>
  )
}

const Loose = () => {
  return (
    <KText variant={'h1'} style={styles.end}>❌</KText>
  )
}

const ListGame = ({item}: { item: Game }) => {
  const {user} = useContext(UserContext);
  const navigation = useNavigation<ListGameNavigationProp>();
  const customSize = width - 40
  const isWinner = item.players.some((player: Player) => player.id === user.uid && player.winner)

  return (
    <>
      {item.gameOver && isWinner && <Win/> || item.gameOver && !isWinner && <Loose/>}
      <Card size={customSize} uriImage={item.uriImage}
            onPress={() => navigation.navigate('Game', {result: item.code, name: `Code de la partie ${item.code}`})}
            style={{opacity: item.gameOver && .7 || 1}}>

        <View style={styles.container}>
          <View style={styles.left}>
            <View style={[styles.common, {
              marginBottom: 20,
              padding: 20,
              backgroundColor: colors.primary,
            }]}>
              <KText color={'light'} numberOfLines={1}>{item.title}</KText>
            </View>
            <View style={[styles.common, {
              padding: 10,
              backgroundColor: colors.light,
            }]}>
              <KText variant={'body3'}
                     style={{marginBottom: 5}}>{item.gameOver && 'Terminée' || item.started && 'Partie en cours' || 'Partie non démarrée'}</KText>
              <KText variant={'body4'}>{item.players.length} joueurs</KText>
            </View>
          </View>

          <View style={styles.right}>
            <View>
              <FontAwesome name="circle" size={20} color={item.started && !item.gameOver ? 'green' : 'red'}/>
            </View>
            <View style={[styles.common, {
              padding: 10,
              backgroundColor: colors.primary,
            }]}>
              <KText color={'light'}>{item.code}</KText>
            </View>
          </View>
        </View>
      </Card>
    </>
  );
};

export default ListGame;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  common: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: layout.radius.Nxl
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 180
  },
  right: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  end: {
    position: 'absolute',
    top: 80,
    left: 165,
    zIndex: 9999,
  }
});
