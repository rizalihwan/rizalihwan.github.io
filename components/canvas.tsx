"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal, X } from "lucide-react";

const commandOutputs: Record<string, string> = {
    "kubectl get pods": `
NAME                            READY   STATUS    RESTARTS   AGE
ticketing-api-6f214d4d         1/1     Running   0          12d
tutuplapak-api-92819db7        1/1     Running   1          7d
redis-master-0                  1/1     Running   0          20d
`,

    "kubectl get nodes": `
NAME                STATUS   ROLES           AGE    VERSION
master-node         Ready    control-plane   300d   v1.30.1
worker-node-01      Ready    worker          280d   v1.30.1
worker-node-02      Ready    worker          280d   v1.30.1
`,

    "docker ps": `
CONTAINER ID   IMAGE               STATUS
6f214d4d       nginx:latest        Up 3 days
92819db7       redis:7             Up 8 days
`,

    "helm list": `
NAME            NAMESPACE     STATUS
monitoring      monitoring    deployed
argocd          argocd        deployed
ingress-nginx   ingress       deployed
`,

    help: `
Available commands:

kubectl get pods
kubectl get nodes
docker ps
helm list
clear
`,
};

export default function Canvas() {
    const [open, setOpen] = useState(false);
    const [history, setHistory] = useState<string[]>([
        "Welcome to Rizal DevOps Terminal",
        "Type 'help' to see available commands.",
    ]);

    const [input, setInput] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [open]);

    const handleCommand = (cmd: string) => {
        const command = cmd.trim();

        if (!command) return;

        if (command === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        const output =
            commandOutputs[command] || `command not found: ${command}`;

        setHistory((prev) => [...prev, `> ${command}`, output]);

        setInput("");
    };

    return (
        <>
            {/* TERMINAL BUTTON */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-5 right-5 z-50 flex size-12 items-center justify-center rounded-full border border-white/10 bg-black/40 shadow-xl backdrop-blur-xl transition hover:scale-105 hover:bg-black/60 dark:bg-white/10"
            >
                <Terminal className="size-5 text-white dark:text-white" />
            </button>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                    <div className="flex h-[500px] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl">
                        {/* HEADER */}
                        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                            <div className="flex items-center gap-2">
                                <Terminal className="size-4 text-green-400" />
                                <p className="text-sm font-semibold text-white">
                                    rizal@devops-terminal
                                </p>
                            </div>

                            <button
                                onClick={() => setOpen(false)}
                                className="rounded-md p-1 transition hover:bg-white/10"
                            >
                                <X className="size-4 text-white" />
                            </button>
                        </div>

                        {/* TERMINAL BODY */}
                        <div className="flex-1 overflow-y-auto p-4 font-mono text-sm text-green-400">
                            {history.map((line, idx) => (
                                <pre key={idx} className="whitespace-pre-wrap">
                                    {line}
                                </pre>
                            ))}

                            {/* INPUT */}
                            <div className="mt-2 flex items-center gap-2">
                                <span className="text-green-500">$</span>

                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleCommand(input);
                                        }
                                    }}
                                    className="flex-1 bg-transparent outline-none"
                                    autoFocus
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
