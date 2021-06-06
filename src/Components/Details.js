/* eslint-disable no-undef */
import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useEffect } from "react";

function Details() {
  let { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        }
      });
  }, []);
  console.log(movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupButton>
              <img src="/images/group-icon.png" />
            </GroupButton>
          </Controls>
          <SubTitle>{movie.subTitle}+</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-top: 10px;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;

  img {
    height: 100%;
    width: 100%;
    object-fit: Contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  padding: 0px 24px;
  margin-right: 22px;
  border: none;
  letter-spacing: 1.8px;
  &:hover {
    background: rgb(198, 198, 198);
  }
  cursor: pointer;
`;
const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  cursor: pointer;
`;
const AddButton = styled.button`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border: 2px solid white;

  align-items: center;
  justify-conttent: center;
  background: rgb(0, 0, 0, 0.6);
  margin-right: 22px;
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupButton = styled(AddButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 700px;
`;
export default Details;
