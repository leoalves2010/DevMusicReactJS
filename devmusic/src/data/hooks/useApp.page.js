import { useState } from "react";

const musicList = [
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

export function useApp() {
    const [selectedMusic, setSelectedMusic] = useState();

    function selectMusic(music) {
        setSelectedMusic(music);
    }

    function nextMusic() {
        const index = musicList.indexOf(selectedMusic);
        if (index === musicList.length - 1) {
            selectMusic(musicList[0]);
        } else {
            selectMusic(musicList[index + 1]);
        }
    }

    function prevMusic() {
        const index = musicList.indexOf(selectedMusic);
        if (index === 0) {
            selectMusic(musicList[musicList.length - 1]);
        } else {
            selectMusic(musicList[index - 1]);
        }
    }

    return {
        musicList,
        selectedMusic,
        selectMusic,
        prevMusic,
        nextMusic,
    };
}
