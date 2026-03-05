import type { JSX } from "react";

export interface ITool {
    id: string;
    name: string;
    description: string;
    url: string;
    icon?: string;
}

interface IToolCardProps {
    tool: ITool;
}

export const ToolCard = ({ tool }: IToolCardProps): JSX.Element => {
    return (
        <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl transition-all hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 active:scale-95 duration-300 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all duration-300" />

            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tool.icon || "🤖"}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {tool.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-mono">
                            ID: {tool.id}
                        </p>
                    </div>
                </div>

                <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {tool.description}
                </p>

                <div className="mt-auto">
                    <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                        Visit Website
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover/link:translate-x-1 transition-transform"
                        >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
