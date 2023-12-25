import React from "react";
import {useParams,Link}from "react-router-dom"


export default function Trailer({ movies }) {
  const params = useParams();
  const { trailler, Plot } = movies[params.id];

  return (
    <div>
<div>
      <iframe
        width="560"
        height="315"
        src={trailler}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
</div>
      <h3>{Plot}</h3>
    </div>
  );
}