const colors = [
  { name: 'void', usage: 'Fondo base', className: 'bg-void' },
  { name: 'panel', usage: 'Tarjetas y paneles', className: 'bg-panel' },
  { name: 'panel-2', usage: 'Paneles elevados', className: 'bg-panel-2' },
  { name: 'line', usage: 'Bordes y divisores', className: 'bg-line' },
  { name: 'ink', usage: 'Texto principal', className: 'bg-ink' },
  { name: 'ink-dim', usage: 'Texto secundario', className: 'bg-ink-dim' },
  { name: 'signal', usage: 'Acento principal', className: 'bg-signal' },
  { name: 'alert', usage: 'Acento secundario', className: 'bg-alert' },
]

function App() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-label text-signal uppercase">
        Etapa 2 // design tokens
      </p>

      <h1 className="mt-4 text-display font-bold">Alejandro Valverde</h1>

      <p className="mt-6 max-w-xl text-lg text-ink-dim">
        Full Stack Developer. Esta página es solo una guía de estilos para comprobar que
        los tokens funcionan.
      </p>

      <section className="mt-16">
        <h2 className="font-mono text-label text-ink-dim uppercase">Paleta</h2>
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {colors.map((color) => (
            <li key={color.name} className="rounded-lg border border-line bg-panel p-3">
              <div className={`${color.className} h-16 rounded-md border border-line`} />
              <p className="mt-3 font-mono text-sm">{color.name}</p>
              <p className="text-xs text-ink-dim">{color.usage}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-label text-ink-dim uppercase">Interacción</h2>
        <button className="mt-4 rounded-md border border-signal px-5 py-2.5 font-mono text-sm text-signal transition-colors hover:bg-signal hover:text-void">
          Probar foco con Tab
        </button>
      </section>
    </main>
  )
}

export default App
