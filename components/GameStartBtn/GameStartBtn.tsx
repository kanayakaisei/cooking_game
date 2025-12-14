"use client";
import { useEffect } from "react";
import styles from "./GameStartBtn.module.css";
import { playBgm, stopBgm } from "@/lib/bgmPlayer";

type Btn = {
    text: string;
    isPlaying: boolean;
    onToggle: (next: boolean) => void;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const GameStartBtn = ({ text, isPlaying, onToggle, className, onClick, disabled }: Btn) => {

    useEffect(() => {
        if (isPlaying) {
            playBgm();
        } else {
            stopBgm();
        }
    }, [isPlaying]);

    const handleClick = () => {
        onToggle(!isPlaying);
        onClick?.();
    };


    return (
        <>
            <button onClick={handleClick}
                className={`${styles.startBtn} ${className ?? ""}`}
                disabled={disabled}
            >
                <p>{text}</p>
            </button >
        </>
    );
};

export default GameStartBtn;