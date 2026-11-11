import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface CanvasErrorBoundaryProps {
  children: ReactNode
}

interface CanvasErrorBoundaryState {
  hasError: boolean
}

export class CanvasErrorBoundary extends Component<
  CanvasErrorBoundaryProps,
  CanvasErrorBoundaryState
> {
  state: CanvasErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): CanvasErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[3D] La escena falló y se desactivó:', error, info.componentStack)
  }

  render() {
    return this.state.hasError ? null : this.props.children
  }
}
