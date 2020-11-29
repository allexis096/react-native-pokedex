import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  align-items: center;
  margin-top: 10px;
`;

export const PokeProfile = styled.View`
  position: relative;

  background-color: #3e3b47;
  width: 70%;
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
  width: 120px;
  height: 120px;
  margin-top: 10px;
`;

export const PokeStrong = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
  text-transform: capitalize;
`;

export const PokeSize = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Size = styled.View`
  flex: 0.4;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
`;

export const SizeNumber = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
`;

export const SizeText = styled.Text`
  color: #666360;
  font-family: 'RobotoSlab-Regular';
  margin-top: -5px;
`;

export const Stats = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  margin-bottom: 10px;
`;
