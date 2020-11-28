import React from 'react';

import {
  PokeCard,
  PokeNumber,
  Pokemon,
  PokeNames,
  PokeName,
  PokeStrong,
  PokeTypes,
  PokeType,
  PokeInfoType,
} from './styles';

interface CardProps {
  poke_number: number;
  poke_img: string;
  poke_name: string;
  poke_type: string[];
  poke_onPress: () => void;
}

const Card: React.FC<CardProps> = ({
  poke_number,
  poke_img,
  poke_name,
  poke_type,
  poke_onPress,
}) => {
  return (
    <PokeCard onPress={poke_onPress}>
      <PokeNumber>{`#${poke_number}`}</PokeNumber>

      <Pokemon source={{ uri: poke_img }} />

      <PokeNames>
        <PokeName>Name: </PokeName>
        <PokeStrong>{poke_name}</PokeStrong>
      </PokeNames>

      <PokeTypes>
        <PokeType>Types: </PokeType>
        <PokeInfoType>{poke_type}</PokeInfoType>
      </PokeTypes>
    </PokeCard>
  );
};

export default Card;
