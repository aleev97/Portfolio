export interface Project {
  id: string
  title: string
  subtitle: string
  period: string
  stack: string[]
  highlights: string[]
  coverAlt?: string
  repoUrl?: string
  demoUrl?: string
}

export interface StackGroup {
  label: string
  items: string[]
}

export interface JourneyItem {
  period: string
  title: string
  place?: string
  description: string
  kind: 'education' | 'project'
  current?: boolean
  projectId?: string
}

export interface SectionLink {
  id: string
  label: string
}
