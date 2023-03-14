import { UserProps } from "../types/user"

import {MdLocationPin} from 'react-icons/md'

import { Link } from "react-router-dom"

const user = ({login, 
  avatar_url,
  followers,
  following,
  location
}: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p>
     <MdLocationPin />
     <span>{location}</span>
      </p>
      <div>
        <p>seguidores</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Seguindo:</p>
        <p>{following}</p>
      </div>
    <Link to={`/repos/${login}`}>Ver melhores Projetos</Link>
    </div>
  )
}

export default user