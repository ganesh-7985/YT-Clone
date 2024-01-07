import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    videos:[],
    currentPlaying: null ,
    searchTerm:null,
    searchResult:[],
    nextPageToker:null,
    recommendVideos:[]
}

const  youtubeSlice = createSlice({
  name:'youtubeApp',
  intialState,
  reducers:{

  }
});

export default youtubeSlice.reducer;