import { Color } from 'three'

// Colores "HDR": al multiplicarlos por un número mayor que 1 superan el umbral
// del bloom y emiten brillo. El naranja necesita un factor mayor porque,
// medido en luminosidad, es un color menos "brillante" que el lima.
export const glowLime = new Color('#c6ff3d').multiplyScalar(2)
export const glowOrange = new Color('#ff7a3d').multiplyScalar(4)
