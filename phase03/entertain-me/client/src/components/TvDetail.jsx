import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import EditOne from "./EditOne";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

const GET_ONE = gql`
query getOneId($id: String){
  getOneTv (id: $id){
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

const DELETE_TV = gql`
mutation ($id: ID){
  deleteTv(id: $id){
    title
  }
}
`;

export default function ItemDetail() {
  let history = useHistory();
  let { id } = useParams();

  const [deleteTv] = useMutation(DELETE_TV, {
    update(cache, { data: { deleteTv } }) {
        const { getTvSeries } = cache.readQuery({ query: GET_TV })
        cache.writeQuery({
            query: GET_TV,
            data: { getTvSeries: getTvSeries.filter(movie => movie._id !== id) }
        })
    }
})

  const deleteOne = ()=>{
    console.log(id, 'dari delet tv');
    
    deleteTv({
      variables:{
        id
      }
    })
    history.push("/tv");
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
            <h2>ini tv detail</h2>
            <img src={data.getOneTv.poster_path} alt="" />
          </div>
          <div className="col-8 mt-5">
            <h3>Title: {data.getOneTv.title}</h3>
            <h3>Popularity: {data.getOneTv.popularity}</h3>
            <h3>Overview: {data.getOneTv.overview}</h3>
             {/* <h6>{JSON.stringify(data.getOneTv)}</h6> */}
          </div>
          <EditOne data={data.getOneTv} />
          <button type="button" className="btn btn-danger m-3" onClick={deleteOne}> Delete </button>
        </div>
      </div>
    </>
  );
}
