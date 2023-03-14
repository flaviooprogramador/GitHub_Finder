type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState } from 'react';

import {BsSearch} from 'react-icons/bs'

import React from 'react'

export const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState("")
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus Melhores repositórios</p>
      <div>
        <input type="text" placeholder='Digite o nome do Usuário' onChange={(e) => setUserName(e.target.value)}/>
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>

  )
}

