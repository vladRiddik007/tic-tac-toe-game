import React from 'react';
import {Alert, View, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {tileX, tileO, Game} from './src';

export default class App extends React.Component {
  state = {
    gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    currentPlayer: 1,
  };

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
    });
  };

  renderIcon = (row, col) => {
    // console.log(tileX, tileO);
    let value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return <Icon name="close" style={tileX} />;
      case -1:
        return <Icon name="circle-thin" style={tileO} />;
      default:
        return <View />;
    }
  };

  onTilePress = (row, col) => {
    //Don't allow tiles change...
    let value = this.state.gameState[row][col];
    if (value !== 0) {
      return;
    }
    //Grab current player...
    let currentPlayer = this.state.currentPlayer;
    //set the correct tile...
    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});
    //switch to other player...
    let nextPlayer = currentPlayer === 1 ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

    //check for winners...
    let winner = this.getWinner();
    if (winner === 1) {
      Alert.alert('Player 1 is the winner');
      this.initializeGame();
    } else if (winner === -1) {
      Alert.alert('Player 2 is the winner');
      this.initializeGame();
    }
  };

  getWinner = () => {
    let sum;
    let NUM_TILES = 3;
    let arr = this.state.gameState;
    //check rows...
    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }
    }
    //check columns...
    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }
    }
    //check the diagonals...
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }

    //there are no winners...
    return 0;
  };

  onNewGame = () => {
    this.initializeGame();
  };

  render() {
    return (
      <>
        <Game
          onNewGame={this.onNewGame}
          onTilePress={this.onTilePress}
          renderIcon={this.renderIcon}
        />
        {/* <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="large" color="#0000ff" /> */}
      </>
    );
  }
}
