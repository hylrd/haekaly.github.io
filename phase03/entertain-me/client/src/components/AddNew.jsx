import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const AddCollection = gql`
  mutation AddNewCollection(
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
  ) {
    addMovie(
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

const AddSeries = gql`
  mutation AddNewCollection(
    $title: String
    $overview: String
    $poster_path: String
    $popularity: Float
    $tags: [String]
  ) {
    addTvSeries(
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
      tags
    }
  }
`;

export default function AddNew() {
  const [title, settitle] = useState("");
  const [overview, setoverview] = useState("");
  const [poster_path, setposter] = useState("");
  const [popularity, setpopularity] = useState(0);
  const [tags, settags] = useState([]);
  const [type, settype] = useState("");

  const [addNewSeries] = useMutation(AddSeries, {
    update(cache, { data: { addTvSeries } }) {
      const { getTvSeries } = cache.readQuery({ query: GET_TV });
      cache.writeQuery({
        query: GET_TV,
        data: { getTvSeries: getTvSeries.concat([addTvSeries]) }
      });
    }
  });

  const [addNewMovie] = useMutation(AddCollection, {
    update(cache, { data: { addMovie } }) {
      const { getMovies } = cache.readQuery({ query: GET_MOVIES });
      cache.writeQuery({
        query: GET_MOVIES,
        data: { getMovies: getMovies.concat([addMovie]) }
      });
    }
  });
  // const [addNewMovie] = useMutation(AddCollection);

  function submitContact() {
    // console.log(title, overview, );
    // console.log(pnumber, popularity);
    let payload = {
      title,
      overview,
      poster_path,
      popularity,
      tags,
      type
    };

    console.log(payload);
    

    if (type === 'movies'){
      addNewMovie({
        variables: {
          title,
          overview,
          poster_path,
          popularity: +popularity,
          tags
        }
      });

    }else{
      addNewSeries({
        variables: {
          title,
          overview,
          poster_path,
          popularity: +popularity,
          tags
        }
      });
    }


    // toast('Addedd!!');
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary m-3"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Add New
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add new to collection
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
                    placeholder="Enter name"
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
                    onChange={event => settags(event.target.value.split(","))}
                    value={tags.join(",")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Type:</label>
                  <select
                    className="custom-select "
                    id="category"
                    name="category"
                    onChange={event => settype(event.target.value)}
                    required
                  >
                    <option value="movies">Movies</option>
                    <option value="tvseries">Tv Series</option>
                  </select>
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
