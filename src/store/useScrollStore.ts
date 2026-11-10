import { create } from 'zustand'

interface ScrollState {
  progress: number
  activeSection: string
  sectionProgress: Record<string, number>
  setProgress: (progress: number) => void
  setActiveSection: (id: string) => void
  setSectionProgress: (value: Record<string, number>) => void
}

export const useScrollStore = create<ScrollState>((set) => ({
  progress: 0,
  activeSection: 'inicio',
  sectionProgress: {},
  setProgress: (progress) => set({ progress }),
  setActiveSection: (activeSection) => set({ activeSection }),
  setSectionProgress: (sectionProgress) => set({ sectionProgress }),
}))
