import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';

function Playlist({playlist, handleParentClick}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEmptyList, setIsEmptyList] = useState(false)

  const emptyList = () => {
    setIsEmptyList(!isEmptyList)
    playlist.length = 0
  }

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  console.log(playlist)
  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
        <DropdownToggle caret>Playlist ({playlist.length})</DropdownToggle>
        <DropdownMenu>
          <button onClick={() => (emptyList())}>Delete All</button>

          {playlist.map((song, i) => ( <DropdownItem key={i} text>{song}  <FaTrashAlt onClick={() => {handleParentClick(song, "cover")}}/></DropdownItem> ))}

        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

// Playlist.propTypes = {
//   direction: PropTypes.string,
// };

export default Playlist;

//  <Button onClick={() => (sendSong(song.title_short, song.album.cover_small))}>{isInPlaylist ? "Remove from playlist" : "Add to playlist"}</Button>
// const sendSong = (song, cover) => {
//   setIsInPlaylist(!isInPlaylist)
//   handleParentClick(song, cover)
// }