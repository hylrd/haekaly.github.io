import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function ItemCard(props){
  let history = useHistory();

  function defineType() {
    // console.log(props.item.__typename);
    
    if(props.item.__typename === 'TvSeries'){
      history.push(`/tvdetail/${props.item._id}`);
    }else{
      history.push(`/movdetail/${props.item._id}`);
    }
  }
  return(
    <>
      {/* <h3>{JSON.stringify(props.item)}</h3> */}
      <div className="card ">
        <img
          className="card-img-top "
          src={props.item.poster_path}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title" onClick={defineType}>{props.item.title}
          </h5>
          {/* <button className="btn" onClick={addFavClick}>add fav</button> */}
        </div>
      </div>
</>
  )
} 