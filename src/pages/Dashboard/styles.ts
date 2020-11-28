import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { PokemonProps } from '.';

export const Header = styled.View`
  background-color: #232129;
  margin: 10px 15px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

export const Icon = styled(Feather)`
  margin-left: 10px;
`;

export const TextInput = styled.TextInput`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  flex: 1;
`;

export const PokeList = styled(FlatList as new () => FlatList<PokemonProps>)`
  margin: 0 8px;
`;
