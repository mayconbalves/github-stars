import React from 'react'
import Header from 'components/header'
import Card from 'components/card'
import { fetchRepos } from './action'
import { useSelector } from 'react-redux'
import { Grid } from './styled'

const Home = () => {
  const repositories = useSelector((state) => state.repositoriesReducer.repos)

  return (
    <>
      <Header handleRepositories={fetchRepos} />
      <Grid>
        {repositories.map((item) => {
          return (
            <Card
              stars={item.stargazers_count}
              key={item.id}
              title={item.name}
              cloneUrl={item.clone_url}
              license={item.license}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default Home
