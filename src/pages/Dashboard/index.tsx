import React from 'react';

import Card from '../../components/Card';

import { TextInput, Header, Icon, PokeContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <Icon name="search" color="#666360" size={20} />
        <TextInput
          placeholderTextColor="#666360"
          placeholder="Type the Pokémon name"
        />
      </Header>

      <PokeContainer>
        <Card
          poke_number="1"
          poke_img="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          poke_name="Bulbasaur"
          poke_type="Grass, Poison"
        />
      </PokeContainer>
    </>
  );
};

export default Dashboard;
