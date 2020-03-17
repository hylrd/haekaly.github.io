import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import EditOne from "./EditOne";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

const GET_ONE = gql`
  query getOneId($id: String) {
    getOne(id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

const GET_MOVIES = gql`
  {
    getMovies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

const DELETE_MOVIE = gql`
mutation ($id: ID){
  deleteMovie(id: $id){
    title
  }
}
`;

export default function ItemDetail() {
  let history = useHistory();
  let { id } = useParams();

  const [deleteMovies] = useMutation(DELETE_MOVIE, {
    update(cache, { data: { deleteMovies } }) {
        const { getMovies } = cache.readQuery({ query: GET_MOVIES })
        cache.writeQuery({
            query: GET_MOVIES,
            data: { getMovies: getMovies.filter(movie => movie._id !== id) }
        })
    }
})

  const deleteOne = ()=>{
    deleteMovies({
      variables:{
        id
      }
    })
    history.push("/");
  }

  const { loading, error, data } = useQuery(GET_ONE, {
    variables: {
      id
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-4 detail">
            <img src={data.getOne.poster_path} alt="" />
          </div>
          <div className="col-8 mt-5">
            <h3>Title: {data.getOne.title}</h3>
            <h3>Popularity: {data.getOne.popularity}</h3>
            <h3>Overview: {data.getOne.overview}</h3>
  <h6>{JSON.stringify(data.getOne)}</h6>
          </div>
          <EditOne data={data.getOne} />
          <button type="button" className="btn btn-danger m-3" onClick={deleteOne}> Delete </button>
        </div>
      </div>
    </>
  );
}
