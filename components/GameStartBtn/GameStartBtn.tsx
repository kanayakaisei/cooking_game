"use client";
import { useEffect } from "react";
import styles from "./GameStartBtn.module.css";
import { playBgm, stopBgm } from "@/lib/bgmPlayer";



type Btn = {
    text: string;
    isPlaying: boolean;
    onToggle: (next: boolean) => void;
    className?: string;
}

const GameStartBtn = ({ text, isPlaying, onToggle, className }: Btn) => {

    // isPlaying が変わったら BGM を ON/OFF
    useEffect(() => {
        if (isPlaying) {
            playBgm();
        } else {
            stopBgm();
        }
    }, [isPlaying]);

    const handleClick = () => {
        onToggle(!isPlaying);
    };


    return (
        <>
            <button onClick={handleClick}
                className={`${styles.startBtn} ${className ?? ""}`}
            >
                <p>{text}</p>
            </button >
        </>
    );
};

export default GameStartBtn;