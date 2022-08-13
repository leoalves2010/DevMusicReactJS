import MusicList from "../components/data-display/MusicList/MusicList";
import AudioPlayer from "../components/data-display/AudioPlayer/AudioPlayer";
import { useState } from "react";
import styles from "./index.module.css";

const musics = [
    {
        id: 1,
        name: "Música 1",
        artist: "Artista 1",
        time: 98,
        url: "musics/Bandido.mp3",
    },
    {
        id: 2,
        name: "Música 2",
        artist: "Artista 2",
        time: 153,
        url: "musics/ComunicacaoFalhou.mp3",
    },
    {
        id: 3,
        name: "Música 3",
        artist: "Artista 3",
        time: 208,
        url: "musics/SaudadeLouca.mp3",
    },
];

export default function Index() {
    const [width, setWidth] = useState();

    return (
        <div className={styles['page-container']}>
            <MusicList
                music={musics}
                selectedMusic={musics[0]}
                onSelect={() => {}}
            />
            <AudioPlayer
                width={width}
                onChangeWidth={setWidth}
                music={musics[0]}
                onComplete={() => {
                    console.log("ÁUDIO FINALIZADO!");
                }}
            />
        </div>
    );
}
