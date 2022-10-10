import Timeline from "../../inputs/Timeline/Timeline";
import { useState, useRef, useEffect, useMemo } from "react";
import {
    PlayerContainer,
    ButtonContainer,
    PlayButton,
    PlayButtonNext,
    PlayButtonPrev,
    Audio,
} from "./AudioPlayer.style";

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
        <PlayerContainer>
            <ButtonContainer>
                <PlayButtonPrev onClick={prevMusic} disabled={!canPlay}>
                    {`\u2bec`}
                </PlayButtonPrev>
                <PlayButton onClick={handlePlay} disabled={!canPlay}>
                    {isPlaying ? `\u2759\u2759` : `\u25B8`}
                </PlayButton>
                <PlayButtonNext onClick={nextMusic} disabled={!canPlay}>
                    {`\u2bee`}
                </PlayButtonNext>
            </ButtonContainer>
            <Timeline width={width} onChangeWidth={changeTime} />
            <Audio
                ref={audioRef}
                controls
                onCanPlay={onCanPlay}
                onEnded={onEnded}
                src={props?.music?.url}
            />
        </PlayerContainer>
    );
}
