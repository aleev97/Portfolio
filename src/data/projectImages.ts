// Todas las imágenes de src/assets/projects/.
// Convención: cada archivo se llama igual que el id del proyecto.
const files = import.meta.glob<string>('../assets/projects/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

export function getProjectCover(projectId: string): string | undefined {
  const match = Object.entries(files).find(([path]) => path.includes(`/${projectId}.`))
  return match?.[1]
}
