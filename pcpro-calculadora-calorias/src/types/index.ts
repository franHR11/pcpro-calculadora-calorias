export type Categorias = {
    id: number,
    name: string
}

export type Actividades = {
    id : string
    categorias: number,
    name: string,
    calorias: number
}