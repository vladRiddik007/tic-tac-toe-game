import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  container,
  tile,
  row,
  button,
  h1,
  tileLeftTop,
  tileTop,
  tileRightTop,
  tileLeft,
  tileRight,
  tileLeftBottom,
  tileBottom,
  tileRightBottom,
} from './style';

const Game = ({onTilePress, renderIcon, onNewGame}) => {
  const field = (roww, col, til) => {
    return (
      <TouchableOpacity
        onPress={() => onTilePress(roww, col)}
        style={[tile, til]}>
        {renderIcon(roww, col)}
      </TouchableOpacity>
    );
  };
  return (
    <View style={container}>
      <Text style={h1}>
        Tic-Tac-Toe Game <Icon name="rocket" size={30} color="#900" />
      </Text>

      <View style={row}>
        {field(0, 0, tileLeftTop)}
        {field(0, 1, tileTop)}
        {field(0, 2, tileRightTop)}
      </View>

      <View style={row}>
        <TouchableOpacity
          onPress={() => onTilePress(1, 0)}
          style={[tile, tileLeft]}>
          {renderIcon(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTilePress(1, 1)} style={tile}>
          {renderIcon(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTilePress(1, 2)}
          style={[tile, tileRight]}>
          {renderIcon(1, 2)}
        </TouchableOpacity>
      </View>

      <View style={row}>
        <TouchableOpacity
          onPress={() => onTilePress(2, 0)}
          style={[tile, tileLeftBottom]}>
          {renderIcon(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTilePress(2, 1)}
          style={[tile, tileBottom]}>
          {renderIcon(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTilePress(2, 2)}
          style={[tile, tileRightBottom]}>
          {renderIcon(2, 2)}
        </TouchableOpacity>
      </View>

      <View style={button}>
        <Button title="New Game" onPress={() => onNewGame()} />
      </View>
    </View>
  );
};

export {Game};
