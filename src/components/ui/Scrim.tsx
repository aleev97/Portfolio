// Capa entre el 3D y el texto: oscurece el fondo para que el texto siempre se lea.
export function Scrim() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -5 }}
    >
      {/* Celular: velo parejo */}
      <div className="absolute inset-0 bg-void/60 md:hidden" />

      {/* Escritorio: oscuro a la izquierda (texto), transparente a la derecha (pista) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(8 9 11 / 0.9) 0%, rgb(8 9 11 / 0.6) 45%, rgb(8 9 11 / 0) 85%)',
        }}
      />
    </div>
  )
}
