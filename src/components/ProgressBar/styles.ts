import styled from 'styled-components/native';

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const StatTitle = styled.Text`
  color: #f4ede8;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  margin-right: 5px;
  text-transform: uppercase;
`;

export const Progress = styled.View`
  position: relative;
  background-color: #c4c4c4;
  width: 150px;
  height: 15px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const ProgressPercentage = styled.Text`
  position: absolute;
  text-align: right;
  padding-right: 5px;
  font-family: 'RobotoSlab-Regular';
  font-size: 10px;
  color: #f4ede8;
  background-color: #ff9000;
  border-radius: 5px;
  height: 15px;
`;
