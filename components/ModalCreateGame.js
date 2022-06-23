// import React, { useContext, useState } from 'react';
// import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Modal from 'react-native-modal';

// // import Animated, {
// //   useSharedValue,
// //   withTiming,
// //   useAnimatedStyle,
// // } from "react-native-reanimated";
// // TODO: expo install react-native-reanimated
// // TODO: expo install react-native-gesture-handler

// import { UserContext } from '@contexts';
// import { createGame, joinGame } from '../api/firebaseGame';
// import colors from '../utils/colors';

// export default function ModalCreateGame({ setModalVisible, modalVisible, isCreateGame }) {
//   const { user, setUser } = useContext(UserContext);
//   const [title, setTitle] = useState('');
//   const navigation = useNavigation();

//   const handleCreateGame = async () => {
//     if (isCreateGame) {
//       const result = await createGame(title, user.uid, user.displayName);
//       // console.log(result);
//       setTitle('');
//       setModalVisible(!modalVisible);
//       navigation.navigate('Game', {
//         result,
//         name: `Partie de ${user.displayName} - Code ${result}`,
//       });
//     } else {
//       const result = await joinGame(title, user.uid, user.displayName);
//       // console.log(result);
//       setTitle('');
//       setModalVisible(!modalVisible);
//       navigation.navigate('Game', {
//         result,
//         name: `Partie de ${user.displayName} - Code ${result}`,
//       });
//     }
//   };

//   // const position = useSharedValue(0);

//   // const flingGesture = Gesture.Fling()
//   //   .direction(Directions.BOTTOM)
//   //   .onStart((e) => {
//   //     position.value = withTiming(position.value + 10, { duration: 100 });
//   //   });

//   // const animatedStyle = useAnimatedStyle(() => ({
//   //   transform: [{ translateX: position.value }],
//   // }));

//   // return (
//   //   <GestureDetector gesture={flingGesture}>
//   //     <Animated.View style={[styles.box, animatedStyle]} />
//   //   </GestureDetector>
//   // );

//   return (
//     <View style={styles.modalContainer}>
//       <Modal
//         isVisible={modalVisible}
//         onBackdropPress={() => setModalVisible(!modalVisible)}
//         onSwipeComplete={() => setModalVisible(!modalVisible)}
//         swipeDirection="down"
//         avoidKeyboard={true}
//       >
//         <View style={styles.container}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>
//               {isCreateGame
//                 ? 'Veuillez entrer un titre pour la partie'
//                 : 'Veuillez entrer le code la partie'}
//             </Text>
//             <TextInput
//               style={styles.input}
//               placeholder={isCreateGame ? 'titre de la partie' : 'code de la partie'}
//               value={title}
//               onChangeText={(text) => setTitle(text)}
//             />
//             <View style={styles.btnContainer}>
//               <Pressable
//                 style={({ pressed }) => [
//                   styles.button,
//                   {
//                     backgroundColor: pressed ? colors.btnPressLight : colors.primary,
//                     width: 150,
//                   },
//                 ]}
//                 onPress={handleCreateGame}
//               >
//                 <Text style={styles.textStyle}>
//                   {isCreateGame ? 'Créer la partie' : 'Rejoindre la partie'}
//                 </Text>
//               </Pressable>
//               <Pressable
//                 style={({ pressed }) => [
//                   styles.button,
//                   {
//                     marginLeft: 20,
//                     backgroundColor: pressed ? colors.btnPressDark : colors.btnPressLight,
//                   },
//                 ]}
//                 onPress={() => {
//                   setTitle('');
//                   setModalVisible(!modalVisible);
//                 }}
//               >
//                 <Text style={[styles.textStyle, { color: colors.primary }]}>Annuler</Text>
//               </Pressable>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   modalView: {
//     marginBottom: -20,
//     height: height - 400,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 8,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: colors.primary,
//     padding: 10,
//     borderRadius: 8,
//   },
//   btnContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// });
