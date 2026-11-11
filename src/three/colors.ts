import { Color } from 'three'
import { quality } from './quality'

// Sin bloom (calidad baja) no hay brillo: un color multiplicado por un factor
// mayor que 1 se vería con el tono desviado, así que el factor vuelve a 1.
const isHigh = quality === 'high'

export const glowLime = new Color('#c6ff3d').multiplyScalar(isHigh ? 2 : 1)
export const glowOrange = new Color('#ff7a3d').multiplyScalar(isHigh ? 4 : 1)
