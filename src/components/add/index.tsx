import { useActionState } from "react"
import { useStore } from "../../store"
import type { ITool } from "../ToolCard"

interface IFormState {
    error?: string;
    success?: boolean;
    toolId?: string;
}

const Field = ({ label, name, type = "text", placeholder, isTextArea = false }: any) => {
    const className = "w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all";
    return (
        <div className="space-y-1.5 text-left">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">{label}</label>
            {isTextArea ? (
                <textarea name={name} placeholder={placeholder} rows={3} className={`${className} resize-none`} />
            ) : (
                <input type={type} name={name} placeholder={placeholder} className={className} />
            )}
        </div>
    );
};

export const Add = () => {
    const addAITool = useStore((state) => state.addAITool)

    const action = async (_prevState: IFormState, formData: FormData): Promise<IFormState> => {
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        const url = formData.get('url') as string;

        if (!name || !description || !url) return { error: 'All fields are required' };

        const toolId = Math.random().toString(36).substring(2, 9);

        const newTool: ITool = {
            id: toolId,
            name,
            description,
            url
        };

        addAITool(newTool);
        return { success: true, toolId };
    }

    const [state, formAction, isPending] = useActionState(action, {});

    return (
        <div className="max-w-md mx-auto mt-12">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />

                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent">
                    New AI Tool
                </h2>

                <form action={formAction} className="space-y-5 relative z-10">
                    <Field label="Name" name="name" placeholder="Chat GPT" />
                    <Field label="Description" name="description" placeholder="Short description..." isTextArea />
                    <Field label="URL" name="url" placeholder="https://..." />

                    {state?.error && <div className="text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded-lg border border-red-400/20">{state.error}</div>}
                    {state?.success && <div className="text-emerald-400 text-sm font-medium bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">Success! ID: {state.toolId}</div>}

                    <button
                        disabled={isPending}
                        className="w-full bg-white text-slate-950 font-bold py-3.5 rounded-xl hover:bg-slate-200 transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-xl shadow-white/5"
                    >
                        {isPending ? 'Adding...' : 'Add Tool'}
                    </button>
                </form>
            </div>
        </div>
    );
};