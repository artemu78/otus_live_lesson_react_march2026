import { create } from "zustand"
import type { ITool } from "../components/ToolCard"

interface IStore {
  aiTools: ITool[];
  addAITool: (tool: ITool) => ITool;
  removeAITool: (id: string) => void;
}

export const useStore = create<IStore>()((set) => ({
  aiTools: [],

  addAITool: (tool) => {
    set((state) => ({
      aiTools: [...state.aiTools, tool]
    }));
    return tool;
  },

  removeAITool: (id) => set((state) => ({
    aiTools: state.aiTools.filter((tool) => tool.id !== id)
  }))

}))