import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { API_KEY } from "../utils/Constants";
import {TMBD_BASE_URL} from "../utils/Constants"

const initialState = {
    movies: [],
    genresLoaded:false,
    genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres",async()=>{
    const { data:{genres} } = await axios.get(`${TMBD_BASE_URL}genre/movie/list?api_key=${API_KEY}`);
    return genres
    })

const getRawData = async (api, genres, paging) =>{
    const moviesArray = [];
    for(let i=0; moviesArray.length<60 && i<10; i++){
        const {data:result} = await axios.get(`${api}${paging?`&page=${i}`:""}`
     
        );
        return moviesArray;
    }

}

export const fetchMovies = createAsyncThunk("netflix/trending", async({type},thunkApi)=>{
    const { Netflix  : {genres},}=thunkApi.getState();
    return getRawData(`${TMBD_BASE_URL}/trending/${type}/week?${API_KEY}`,genres,true)

})

const netflixSlice = createSlice({
    name:"Netflix",
    initialState,
    extraReducers: (Builder) => {
        Builder.addCase(getGenres.fulfilled , (state,action)=>{
            state.genres = action.payload;
            state.genresLoaded = true;
        })
    }
})



export const store = configureStore({
    reducer: {
        netflix: netflixSlice.reducer
    },
})