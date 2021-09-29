import React, {useState, useEffect, useContext} from 'react'
import { AccountContext } from '../account_management/AccountProvider'
import {Link} from 'react-router-dom'


const AnimeFavorites = () => {
  const {account} = useContext(AccountContext)
  const [userAnimeInfo, setUserAnimeInfo] = useState([])
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const user = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/user/user_favorite`, {
        method: "POST",
         body: JSON.stringify({
           "user_id": account.account_id
        }),
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${account.session_id}`
         }
        });
      const info = await response.json()
      setUserAnimeInfo(info.users)

    }catch (err){
      setIsError(true)
    }

  }


   useEffect(() => {
    user()
   }, [])

  return (
    <div>
      <div className='anime-data'>
          {userAnimeInfo ? userAnimeInfo.map((user) => 
          
            <div>
              <Link to={`/anime-profile/${user.id}/anime-summary`}>
                 <img src={user.cover_image} alt='inu' />
                <p className='title'>{user.name}</p>
                </Link>
              </div>
          
              
          ): ""}
        </div>
    </div>

    
  )
}

export default AnimeFavorites