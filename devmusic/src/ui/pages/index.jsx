import MusicList from "../components/data-display/MusicList/MusicList";
import Timeline from "../components/data-display/inputs/Timeline/Timeline";
import { useState } from "react";

const musics = [
    {
        id: 1,
        name: "Música 1",
        artist: "Artista 1",
        time: 98,
    },
    {
        id: 2,
        name: "Música 2",
        artist: "Artista 2",
        time: 153,
    },
    {
        id: 3,
        name: "Música 3",
        artist: "Artista 3",
        time: 208,
    },
];

export default function Index() {
    const [width, setWidth] = useState();

    return (
        <div>
            <MusicList music={musics} selectedMusic={musics[0]} onSelect={() => {}}/>
            <Timeline width={width} onChangeWidth={setWidth}/>
        </div>
    );
}
