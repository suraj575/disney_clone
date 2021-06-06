import React,{useEffect} from "react";
import styled from "styled-components";
import {auth,provider} from '../firebase';
import { Link } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLogin ,setSignOut} from "../Features/User/userSlice";
import { useSelector,useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const history= useHistory();
    const user = useSelector(selectUserName);
    const photo = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL,
                }));
                history.push('/');
                
            }
        })
      
    }, [])

    const SignIn=()=>{
        auth.signInWithPopup(provider).
        then((res)=>{
          console.log(res);
            let user=res.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            }));
            history.push('/');
            console.log(res.additionalUserInfo.profile.give);
        })

    }
    const SignOut=()=>{
        auth.signOut().then(()=>{
            dispatch(setSignOut());
            history.push('/login');

        })
        
    }
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!user ? (
        <Login onClick={SignIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />

              <span> Home</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" />
              <span>Search</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>Watchlist</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" />
              <span>Originals</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>Movies</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>Series</span>
            </a>
          </NavMenu>
          <UserImg src={photo} onClick={SignOut} />
        </>
      )}
    </Nav>
  );
}
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  padding: 0px 36px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;

  cursor: pointer;
  padding: 0 36px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        background: white;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login=styled.div`
position:absolute;
right:0;
margin:0px 15px;
cursor:pointer;
border: 1px solid #f9f9f9;
padding: 8px 16px;
letter-spacing: 2px;
text-transform:uppercase;
border-radius:4px;
background-color:rgba(0,0,0,0.6);
transition:all 0.2s ease 0s;
&:hover{
    background-color:white;
    color:black;
    border-color:transparent;
}

`

export default Header;
