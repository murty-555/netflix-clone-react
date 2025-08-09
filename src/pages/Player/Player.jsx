import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2M0YWEwYWQwZGM5ZDA0NWU4ZGVjYWI0ZmJmZDBjMCIsIm5iZiI6MTc1NDYyOTY2My4zODMwMDAxLCJzdWIiOiI2ODk1ODYxZjYxYWI4YWQyNDA3OTViZjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9aseJEm7O0RQP3qnzCBE8f2IEd9jSrI6riAnfT3bgfU",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => navigate("/")} />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
