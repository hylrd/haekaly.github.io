import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ItemCard from './ItemCard'
const GET_MOVIES = gql`
  {
    getMovies{
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
   
  }
`;

const GET_TV = gql`
  {
    getTvSeries{
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export default function Home() {

  const { loading, error, data } = useQuery(GET_TV);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return(
    <>
    <div className="container align-center">
    <h1>ini Tv Series Page</h1>
  {/* <p>{JSON.stringify(data.getTvSeries)}</p> */}
  <div className="row">
  {data.getTvSeries.map((item,i) => <ItemCard key={i} item={item}>Test</ItemCard>)}
  </div>

    </div>
    </>
  )
}