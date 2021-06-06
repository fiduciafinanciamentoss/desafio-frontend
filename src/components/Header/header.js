import React, { useState } from 'react';
import { Search, Content } from './styles';
 

export default function Header (props) {

    const [search, setSearch] = useState('');

    return (
      <Search>
        <Content>
          <form>
              <input 
                id="search" 
                type="search" 
                required 
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Digite o nome de um Pokemon"
                />
              <button onClick={(e) => props.searchforPokemon(search)}>Pesquisar</button>
          </form>
        </Content>
      </Search>
    );
}