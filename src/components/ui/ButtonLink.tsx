import type { ComponentProps } from 'react'

interface ButtonLinkProps extends ComponentProps<'a'> {
  variant?: 'primary' | 'outline'
  size?: 'md' | 'sm'
}

const base = 'rounded-md font-mono text-sm transition-colors'

const variants = {
  primary: 'bg-signal text-void font-medium hover:opacity-90',
  outline: 'border border-line hover:border-signal hover:text-signal',
}

const sizes = {
  md: 'px-6 py-3',
  sm: 'px-4 py-2',
}

export function ButtonLink({
  variant = 'outline',
  size = 'md',
  className = '',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
