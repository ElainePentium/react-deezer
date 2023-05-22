import React, { useState } from "react";
import data from "../data";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Button
} from 'reactstrap';


function SongCard({song, handleParentClick}) {

    // const playList = [];

    const [isInPlaylist, setIsInPlaylist] = useState(false);

    const sendSong = (song, cover) => {
        setIsInPlaylist(!isInPlaylist)
        handleParentClick(song, cover)
        // parentCallback(isInPlaylist)
    }

    // console.log("playlist: ", playList)

    return (
        <div style={{margin: '10px 0'}}>
            <Card style={{ width: '18rem'}}>
                <img alt="Sample" src={song.album.cover_big} />
                <CardBody>
                    <CardSubtitle className="mb-2 text-muted" tag="h6" >{song.title_short}</CardSubtitle>
                    <Button onClick={() => (sendSong(song.title_short, song.album.cover_small))} >{isInPlaylist ? "Remove from playlist" : "Add to playlist"}</Button>
                    <audio controls className="audio" style={{ width: '100%'}}>
                        <source src={song.preview} type = "audio/mpeg" />
                    </audio>
                </CardBody>
            </Card>
        </div>
    )
}

export default SongCard

// setPlayList([...playList, song.title_short])

// <CardSubtitle className="mb-2 text-muted" tag="h6" >Card subtitle</CardSubtitle>
// <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>


// function Button () {
//     const handleClick = () => {
//       alert("Yes, you clicked me!")
//     }
  
//     return (
//       <button onClick={handleClick}>
//         Click Me
//       </button>
//     );
//   };
