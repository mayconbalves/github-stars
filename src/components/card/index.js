import React from 'react'
import { number, string, object } from 'prop-types'
import emptyStar from 'assets/empty_star.png'
import fullStar from 'assets/full_star.png'
import {
  CardHeader,
  Container,
  CardStar,
  CardTitle,
  StarImg,
  CardBody,
  ListItem,
  TitleList,
  DescriptionList
} from './styled'

const Card = ({ cloneUrl, license, stars, title }) => {
  return (
    <Container>
      <CardHeader>
        <CardTitle>
          <p>{title}</p>
        </CardTitle>
        <CardStar>
          <p>{stars}</p>
          {stars === 0 ? (
            <StarImg src={emptyStar} alt="empty star" />
          ) : (
            <StarImg src={fullStar} alt="full star" />
          )}
        </CardStar>
      </CardHeader>
      <CardBody>
        <ul>
          <ListItem>
            <TitleList>Clone repo:</TitleList>
            <DescriptionList>{cloneUrl}</DescriptionList>
          </ListItem>
          <ListItem>
            <TitleList>License type:</TitleList>
            {license?.name ? (
              <DescriptionList>{license?.name}</DescriptionList>
            ) : (
              <DescriptionList>None</DescriptionList>
            )}
          </ListItem>
        </ul>
      </CardBody>
    </Container>
  )
}

Card.propTypes = {
  cloneUrl: string.isRequired,
  license: object,
  stars: number,
  title: string.isRequired
}

export default Card
