import { combineReducers } from "redux";

const songReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:45'},
        {title: 'All star', duration: '3:14'},
        {title: 'I want it that way', duration: '3:08'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});