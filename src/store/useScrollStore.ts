import { create } from 'zustand'

interface ScrollState {
  progress: number
  activeSection: string
  setProgress: (progress: number) => void
  setActiveSection: (id: string) => void
}

export const useScrollStore = create<ScrollState>((set) => ({
  progress: 0,
  activeSection: 'inicio',
  setProgress: (progress) => set({ progress }),
  setActiveSection: (activeSection) => set({ activeSection }),
}))
