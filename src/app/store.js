import { configureStore}  from '@reduxjs/toolkit';
import movieReducer from '../Features/movie/movieSlice';
import userReducer from '../Features/User/userSlice';


export const store=configureStore({
    reducer:{
        movie:movieReducer,
        user:userReducer,
    },
})

export default store;