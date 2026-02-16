import { Suspense } from "react";
import Select from "./Select";

export default function Page() {
    return (
        <Suspense fallback={<div>ロード中...</div>}>
            <Select />
        </Suspense>
    );
}
