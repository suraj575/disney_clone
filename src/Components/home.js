/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styled from 'styled-components';
import ImageSlider from './imageSlider'
import Viewers from './Viewers';
import Movies from './movies';
import { useEffect } from 'react';
import db from '../firebase';
import {useDispatch} from  'react-redux';
import {setMovies} from "../Features/movie/movieSlice";



function home() {
   const dispatch = useDispatch()
    useEffect(() => {
       db.collection("movies").onSnapshot((snapshot)=>{
             let tempMovies=snapshot.docs.map((doc)=>{
               return {id:doc.id, ...doc.data()}
             })
             dispatch(setMovies(tempMovies));
       });
    }, [])

    return (
      
        <Container > 
            <ImageSlider/>
            <Viewers/>
            <Movies/>
          
        </Container>

    )
}


const Container=styled.main`
  min-height:calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position:relative;
  overflow-x:hidden;

  &:before{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content:"";
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:-1;

  }
  `
export default home
