import MusicList from "../components/data-display/MusicList/MusicList";
import AudioPlayer from "../components/data-display/AudioPlayer/AudioPlayer";
import { useState, useContext } from "react";
import { AppContext } from "../../App";
import { PageContainer } from "./index.style";

export default function Index() {
    const [width, setWidth] = useState();
    const { musicList, selectedMusic, selectMusic, prevMusic, nextMusic } =
        useContext(AppContext);

    return (
        <PageContainer>
            <MusicList
                music={musicList}
                selectedMusic={selectedMusic}
                onSelect={selectMusic}
            />
            <AudioPlayer
                width={width}
                onChangeWidth={setWidth}
                music={selectedMusic}
                onPrevMusic={prevMusic}
                onNextMusic={nextMusic}
            />
        </PageContainer>
    );
}
