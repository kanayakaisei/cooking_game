"use client";
import { useEffect } from "react";
import styles from "./GameStartBtn.module.css";
import { playBgm, stopBgm } from "@/lib/bgmPlayer";

type Btn = {
    text: string;
    isPlaying: boolean;
    onToggle: (next: boolean) => void;
    variant?: "start" | "end";
    onClick?: () => void;
    disabled?: boolean;
}

const GameStartBtn = ({ text, isPlaying, onToggle, variant = "start", onClick, disabled }: Btn) => {


    useEffect(() => {
        if (isPlaying) playBgm();
        else stopBgm();
    }, [isPlaying]);

    const handleClick = () => {
        if (disabled) return;
        onToggle(!isPlaying);
        onClick?.();
    };


    return (
        <>
            <button
                type="button"
                onClick={handleClick}
                className={
                    variant === "start"
                        ? styles.startBtn
                        : styles.endBtn
                }
                disabled={disabled}
            >
                <p>{text}</p>
            </button >
        </>
    );
};

export default GameStartBtn;