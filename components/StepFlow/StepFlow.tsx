"use client";
import styles from "./StepFlow.module.css";

type Props = {
    currentStep: number;
};

const steps = [
    { key: "cut", label: "きる" },
    { key: "mix", label: "まぜる" },
    { key: "flip", label: "よそう" },
];

export default function StepFlow({ currentStep }: Props) {
    return (
        <div className={styles.flow}>
            {steps.map((step, index) => {
                const active = currentStep === index;
                const done = currentStep > index;

                return (
                    <div key={step.key} className={styles.stepWrap}>
                        <div
                            className={`
                                ${styles.circle}
                                ${active ? styles.active : ""}
                                ${done ? styles.done : ""}
                            `}
                        >
                            <p>{step.label}</p>
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`
                                    ${styles.line}
                                    ${currentStep > index ? styles.lineDone : ""}
                                `}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
