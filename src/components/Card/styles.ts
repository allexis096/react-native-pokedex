import styled from 'styled-components/native';

export const PokeCard = styled.TouchableOpacity`
  position: relative;

  background-color: #3e3b47;
  width: 47%;
  align-items: center;
  margin-left: 8px;
  margin-bottom: 8px;
`;

export const PokeNumber = styled.Text`
  position: absolute;
  left: 5px;

  color: #666360;
  font-family: 'RobotoSlab-Bold';
`;

export const Pokemon = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: 10px;
`;

export const PokeNames = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

export const PokeName = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const PokeStrong = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
  text-transform: capitalize;
`;

export const PokeTypes = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const PokeType = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const PokeInfoType = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
  text-transform: capitalize;
`;
