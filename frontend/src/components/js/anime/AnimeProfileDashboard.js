import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import AnimeEpisodes from './AnimeEpisodes'
import AnimeSummary from './AnimeSummary'
import AnimeTags from './AnimeTags'
import AnimeCharacters from './AnimeCharacters'
import AnimeReviews from './AnimeReviews'
import AnimeRecommendations from './AnimeRecommendations'
import CharacterProfile from './CharacterProfile'

const AnimeProfileDashboard = ({animeInfo, anime_id}) => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/anime-summary/:anime_id`}>
        <AnimeSummary animeInfo= {animeInfo} anime_id={anime_id}/>
      </Route>
      <Route exact path={`${path}/episodes/:anime_id`}>
        <AnimeEpisodes anime_id={anime_id}  />
      </Route>
      <Route exact path={`${path}/anime-tags`}>
        <AnimeTags anime_id={anime_id}  />
      </Route>
      <Route exact path={`${path}/anime-characters`}>
        <AnimeCharacters anime_id={anime_id}  />
      </Route>
      <Route exact path={`${path}/anime-reviews`}>
        <AnimeReviews anime_id={anime_id}  />
      </Route>
      <Route exact path={`${path}/anime-recommedations`}>
        <AnimeRecommendations anime_id={anime_id}  />
      </Route>
      <Route exact path={`${path}/anime-characters/character-profile/:character_id`}>
        <CharacterProfile />
      </Route>
      <Route exact path={`${path}/anime-summary/character-profile/:character_id`}>
        <CharacterProfile />
      </Route>
    </Switch>
  )
}

export default AnimeProfileDashboard
