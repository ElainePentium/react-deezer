import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';
import NavBarExample from './components/NavBar';
import Playlist from './components/Playlist'
import SongCard from './components/SongCard'

function App() {

  const [playList, setPlayList] = useState([]);
  const [isInPlaylist, setIsInPlaylist] = useState(false);

  const getPlaylist = (song, cover) => {
    if (!playList.includes(song)) {
      setPlayList(playList => [...playList, song])
      // setIsInPlaylist(!isInPlaylist)
    } else {
      setPlayList(playList => playList.filter(mySong => mySong != song))
      // setIsInPlaylist(!isInPlaylist)
    }
  }

  // console.log(SongCard)

  // const updateState = (state) => {
  //   // const [isInPlayList, setIsInPlayList] = useState(state);
  //   // setIsInPlayList(!isInPlayList)
  // }


  return (
    <div className="App">
      <nav className="App-header">
        <Playlist playlist={playList} handleParentClick={getPlaylist} />
      </nav>
      <main style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}> {data.map((song, i) => ( <SongCard key={i} song={song} handleParentClick={getPlaylist} /> ))} </main>
    </div>
  );
}

export default App;
