let startBgm: HTMLAudioElement | null = null;
let gameBgm: HTMLAudioElement | null = null;

const ensureBgm = (kind: "start" | "game") => {
    if (typeof window === "undefined") return null;

    if (kind === "start") {
        if (!startBgm) {
            startBgm = new Audio("/sounds/startBGM.mp3");
            startBgm.loop = true;
            startBgm.volume = 0.35;
        }
        return startBgm;
    }

    if (!gameBgm) {
        gameBgm = new Audio("/sounds/gameBGM.mp3");
        gameBgm.loop = true;
        gameBgm.volume = 0.35;
    }
    return gameBgm;
};

const safePlay = async (audio: HTMLAudioElement) => {
    if (!audio.paused) return;
    try {
        await audio.play();
    } catch (e) {
        console.log("BGM play blocked:", e);
    }
};


export const playStartBgm = async () => {
    stopGameBgm();
    const audio = ensureBgm("start");
    if (!audio) return;
    await safePlay(audio);
};

export const stopStartBgm = () => {
    if (!startBgm) return;
    startBgm.pause();
};

//  ゲーム用音楽
export const playGameBgm = async () => {
    stopStartBgm();
    const audio = ensureBgm("game");
    if (!audio) return;
    await safePlay(audio);

};

export const stopGameBgm = () => {
    if (!gameBgm) return;
    gameBgm.pause();
}

export const restartStartBgm = async () => {
    const a = ensureBgm("start");
    if (!a) return;
    a.currentTime = 0;
    await safePlay(a);
};
export const restartGameBgm = async () => {
    const a = ensureBgm("game");
    if (!a) return;
    a.currentTime = 0;
    await safePlay(a);
};
