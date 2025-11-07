"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Cut from "./components/CutStep/CutStep";
import Mix from "./components/MixStep/MixStep";
import Flip from "./components/FlipStep/FlipStep";


const Game = () => {
    return (
        <div>
            <h1>ゲーム本体ページ</h1>

            <div>
                <Cut></Cut>
                <Mix></Mix>
                <Flip></Flip>
            </div>
        </div>
    )
}

export default Game;