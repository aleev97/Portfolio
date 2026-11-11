// Foto de perfil opcional: src/assets/profile/photo.(webp|png|jpg|jpeg).
const files = import.meta.glob<string>('../assets/profile/photo.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

export const profilePhoto: string | undefined = Object.values(files)[0]
