import { TimeService } from "../../../../data/services/TimeService";
import {
    MusicsList,
    MusicInformation,
    MusicName,
    MusicArtist,
    MusicTime,
    MusicListItem,
} from "./MusicList.style";

export default function MusicList(props) {
    function isSelected(music) {
        return props.selectedMusic === music ? "selected" : "";
    }

    return (
        <MusicsList>
            {props.music.map((music) => (
                <MusicListItem
                    key={music.id}
                    className={isSelected(music)}
                    onClick={() => props.onSelect(music)}
                >
                    <MusicInformation>
                        <MusicName>{music.name}</MusicName>
                        <MusicArtist>{music.artist}</MusicArtist>
                        <MusicTime>
                            {TimeService.timeDisplay(music.time)}
                        </MusicTime>
                    </MusicInformation>
                </MusicListItem>
            ))}
        </MusicsList>
    );
}
