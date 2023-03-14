import { UserProps } from '../types/user';

import { Search } from '../components/Search'

import {useState} from "react";

import user from '../components/user';

const Home = () => {
  const [user, setUser]  = useState<UserProps | null >(null)

  const loadUser = async(userName: string) => {
    
    const res = await fetch(`https://api.github.com/users/${userName}`)
 

  const data = await res.json();
  
  const{avatar_url, login, location, followers, following} = data 
  
  const userData: UserProps = {
    avatar_url,
    login,
    location,
    followers,
    following,
  }

  setUser(userData)

  console.log(data)
  }

return (<div>
    <Search loadUser={loadUser} />
    {user && <user {...user/>}

  </div>
  )
  }

export default Home