class SaibaMais {
  id: number
  title: string
  nota: string
  description: string
  image: string
  infos: string[]
  imageNota: string

  constructor(
    title: string,
    nota: string,
    description: string,
    image: string,
    infos: string[],
    id: number,
    imageNota: string
  ) {
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.nota = nota
    this.id = id
    this.imageNota = imageNota
  }
}

export default SaibaMais
