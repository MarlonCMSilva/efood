class Carrinho {
  id: number
  titulo: string
  description: string
  image: string

  constructor(titulo: string, description: string, image: string, id: number) {
    this.id = id
    this.titulo = titulo
    this.description = description
    this.image = image
  }
}

export default Carrinho
