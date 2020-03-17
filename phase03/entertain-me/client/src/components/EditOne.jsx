import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams } from "react-router-dom";

const EditCollection = gql`
  mutation editCollection(
    $_id: String
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
  ) {
    editMovie(
      _id: $_id
      title: $title
      overview: $overview
      poster_path: $poster_path
      popularity: $popularity
      tags: $tags
    ) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

const EditTv = gql`
mutation editCollection(
  $_id: String
  $title: String
  $overview: String
  $poster_path: String
  $popularity: Float
  $tags: [String]
) {
  editTvSeries(
    _id: $_id
    title: $title
    overview: $overview
    poster_path: $poster_path
    popularity: $popularity
    tags: $tags
  ) {
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

const GET_TV = gql`
  {
    getTvSeries{
      _id
      title
      overview
      poster_path
      popularity
    }
  }
`;

export default function EditOne(props) {
  const [title, settitle] = useState(props.data.title);
  const [overview, setoverview] = useState(props.data.overview);
  const [poster_path, setposter] = useState(props.data.poster_path);
  const [popularity, setpopularity] = useState(props.data.popularity);
  const [tags, settags] = useState(props.data.tags);
  const [type, settype] = useState("");
  let { id } = useParams();

  useEffect(() => {}, []);

  const [editOneMovie] = useMutation(EditCollection, {
    update(cache, { data: { editOneMovie } }) {
      const { getMovies } = cache.readQuery({ query: GET_MOVIES });
      cache.writeQuery({
        query: GET_MOVIES,
        data: {
          getMovies: getMovies.map(movie =>
            movie._id === id ? editOneMovie : movie
          )
        }
      });
    }
  });

  const [editOneTv] = useMutation(EditTv, {
    update(cache, { data: { editOneTv } }) {
      const { getTvSeries } = cache.readQuery({ query: GET_TV });
      cache.writeQuery({
        query: GET_TV,
        data: {
          getTvSeries: getTvSeries.map(movie =>
            movie._id === id ? editOneMovie : movie
          )
        }
      });
    }
  });
  // const [addNewMovie] = useMutation(AddCollection);

  function submitContact() {
    // console.log(payload);

    if(props.data.__typename === 'TvSeries'){
      editOneTv({
        variables: {
          _id: id,
          title,
          overview,
          poster_path,
          popularity: +popularity,
          tags
        }
      });
    }else{
      editOneMovie({
        variables: {
          _id: id,
          title,
          overview,
          poster_path,
          popularity: +popularity,
          tags
        }
      });
    }

    editOneMovie({
      variables: {
        _id: id,
        title,
        overview,
        poster_path,
        popularity: +popularity,
        tags
      }
    });

    // toast('Addedd!!');
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary m-3"
        data-toggle="modal"
        data-target="#exampleCenter"
      >
        Edit One
      </button>

      <div
        className="modal fade"
        id="exampleCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit This One
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={title || ""}
                    // placeholder={props.tile}
                    onChange={event => settitle(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Overview</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={overview || ""}
                    onChange={event => setoverview(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Popularity</label>
                  <input
                    type="number"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={popularity || ""}
                    onChange={event => setpopularity(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Poster Path</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pnumber"
                    placeholder="input number"
                    value={poster_path || ""}
                    onChange={event => setposter(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Tags</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pnumber"
                    placeholder="input number"
                    value={tags || ""}
                    onChange={event => settags(event.target.value.split(","))}
                    value={tags.join(",")}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={submitContact}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
