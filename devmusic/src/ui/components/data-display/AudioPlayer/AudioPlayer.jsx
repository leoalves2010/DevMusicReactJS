import styles from "../AudioPlayer/AudioPlayer.module.css";
import Timeline from "../../inputs/Timeline/Timeline";
import { useState, useRef, useEffect, useMemo } from "react";

export default function AudioPlayer(props) {
    const [canPlay, setCanPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(1);
    const audioRef = useRef(null);
    const width = useMemo(
        () => (currentTime * 100) / duration,
        [duration, currentTime]
    );

    useEffect(() => {
        if (props.music) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, props.music]);

    useEffect(() => {
        setCurrentTime(0);
        setCanPlay(false);
    }, [props.music]);

    useEffect(() => {
        const interval = setInterval(() => {
            isPlaying && setCurrentTime(audioRef.current.currentTime);
        }, 500);

        return () => clearInterval(interval);
    }, [isPlaying]);

    function onCanPlay() {
        setCanPlay(true);
        setDuration(audioRef.current.duration);
    }

    function onEnded() {
        // setIsPlaying(false);
        props?.onNextMusic();
    }

    function changeTime(percent) {
        if (props.music) {
            audioRef.current.currentTime = (percent * duration) / 100;
        }
    }

    function handlePlay() {
        if (props.music) {
            setIsPlaying(!isPlaying);
        }
    }

    function prevMusic() {
        props?.onPrevMusic();
    }

    function nextMusic() {
        props?.onNextMusic();
    }

    return (
        <div className={styles["player-container"]}>
            <div className={styles["button-container"]}>
                <button
                    onClick={prevMusic}
                    className={styles["play-button-prev"]}
                    disabled={!canPlay}
                >
                    {`\u2bec`}
                </button>
                <button
                    onClick={handlePlay}
                    className={styles["play-button"]}
                    disabled={!canPlay}
                >
                    {isPlaying ? `\u2759\u2759` : `\u25B8`}
                </button>
                <button
                    onClick={nextMusic}
                    className={styles["play-button-next"]}
                    disabled={!canPlay}
                >
                    {`\u2bee`}
                </button>
            </div>
            <Timeline width={width} onChangeWidth={changeTime} />
            <audio
                ref={audioRef}
                controls
                className={styles["audio"]}
                onCanPlay={onCanPlay}
                onEnded={onEnded}
                src={props?.music?.url}
            />
        </div>
    );
}
