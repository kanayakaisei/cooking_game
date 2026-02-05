"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import Game from "./Game";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <Game />
        </Suspense>
    );
}
