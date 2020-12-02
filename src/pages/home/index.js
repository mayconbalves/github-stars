import React from 'react'
import Header from 'components/header'
import Card from 'components/card'
import { fetchRepos } from './action'
import { useSelector } from 'react-redux'
import { Grid } from './styled'
import Feedback from 'components/feedback'
import Spinner from 'components/spinner'

const Home = () => {
  const repositories = useSelector((state) => state.repositoriesReducer.repos)
  const loading = useSelector((state) => state.spinnerReducer.loading)
  return (
    <>
      {loading && <Spinner />}
      <Header handleRepositories={fetchRepos} />
      <Grid>
        {repositories.length === 0 && (
          <Feedback message="No repository found" />
        )}
        {!repositories.message ? (
          repositories.map((item) => (
            <Card
              stars={item.stargazers_count}
              key={item.id}
              title={item.name}
              cloneUrl={item.clone_url}
              license={item.license}
            />
          ))
        ) : (
          <Feedback message={repositories.message} />
        )}
      </Grid>
    </>
  )
}

export default Home
