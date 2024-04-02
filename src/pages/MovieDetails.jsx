import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import "./movieDetails.css"

export const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  
  useEffect(() => {
    get("/movie/"+movieId).then((data)=>{
      setMovie(data);
      setGeneros(data.genres[0])
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return(
    <div className="detailsContainer">
      <img src = {imageUrl}
      alt = {movie.title} className="col Img"/>
      <div className=" col movieDetails">
        <p className="titleMovie">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p className="genero">
          <strong>Genero: </strong>
          {generos.name}
        </p>
        <p className="descripcion">
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  )
};