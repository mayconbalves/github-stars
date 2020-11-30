import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f8f8f8;
  display: grid;
  height: 240px;
  width: 100%;
  text-align: center;
  border: 1px solid #d3d3d3;
  box-shadow: 5px 10px #ddd;

  &:hover {
    box-shadow: 5px 10px #888;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  border-bottom: 3px solid #fff;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`

export const CardStar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`

export const StarImg = styled.img`
  width: 15px;
  margin: 0 5px;
`

export const CardBody = styled.div`
  display: flex;
`
export const ListItem = styled.li`
  padding: 5px;
`

export const TitleList = styled.h1`
  font-size: 18px;
  text-align: left;
`

export const DescriptionList = styled.p`
  font-size: 12px;
  text-align: left;
`
