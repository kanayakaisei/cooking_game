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
    const reset = async () => {
        try {
            const res = await fetch(
                "https://click.ecc.ac.jp/ecc/kkanaya/works/2/Sizen/php/reset.php",
                {
                    method: "POST",
                }
            );
        }
        catch (e) {
            console.error(e);
        }
    }


    useEffect(() => {
        if (isPlaying) playBgm();
        else stopBgm();
    }, [isPlaying]);

    const handleClick = async () => {
        if (disabled) return;
        const next = !isPlaying;
        onToggle(next);

        if (!next && variant === "end") {
            await reset();
        }
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