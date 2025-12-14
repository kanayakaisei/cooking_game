let bgm: HTMLAudioElement | null = null;

const ensureBgm = () => {
    if (typeof window === "undefined") return null;

    if (!bgm) {
        bgm = new Audio("/sounds/gameBGM.mp3");
        bgm.loop = true;
    }
    return bgm;
};

export const playBgm = () => {
    const audio = ensureBgm();
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
};

export const stopBgm = () => {
    if (!bgm) return;
    bgm.pause();
};
