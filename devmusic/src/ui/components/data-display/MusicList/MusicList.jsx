import styles from "./MusicList.module.css";
import { TimeService } from "../../../../data/services/TimeService";

export default function MusicList(props) {
    function isSelected(music) {
        return props.selectedMusic === music ? styles["selected"] : "";
    }

    return (
        <ul className={styles["music-list"]}>
            {props.music.map((music) => (
                <li
                    key={music.id}
                    className={[
                        styles["music-list-item"],
                        isSelected(music),
                    ].join(" ")}
                    onClick={() => props.onSelect(music)}
                >
                    <div className={styles["music-information"]}>
                        <span className={styles["music-name"]}>
                            {music.name}
                        </span>
                        <span className={styles["music-artist"]}>
                            {music.artist}
                        </span>
                        <span className={styles["music-time"]}>
                            {TimeService.timeDisplay(music.time)}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
