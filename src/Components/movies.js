/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styled from "styled-components";
import { selectMovies } from "../Features/movie/movieSlice";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";

function movies() {
  const movie = useSelector(selectMovies);
  console.log(movie);
  return (
    <Container>
      <h1>Recommended for you</h1>
      <Contain>
        {movie.map((movie) => {
          return (
            <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
            <img src={movie.cardImg} alt="movie" />
            </Link>
            </Wrap>
          );
        })}
      </Contain>
    </Container>
  );
}
const Container = styled.div``;
const Contain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 10px;
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;

export default movies;
