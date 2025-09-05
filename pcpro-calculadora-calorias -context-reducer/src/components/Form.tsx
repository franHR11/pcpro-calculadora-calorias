import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import { categorias } from "../data/categorias"
import type { Actividades } from "../types"
import { useActivity } from "../hooks/useActivity"

const initialState: Actividades = {
    id: uuidv4(),
    categorias: 1,
    name: '',
    calorias: 0
}



export default function Form() {
    const { state, dispatch } = useActivity()
    const [actividad, setActividad] = useState<Actividades>(initialState)

    useEffect(() => {
        if (state.activeId) {
            const selectedActivity = state.actividades.filter(stateActivity => stateActivity.id === state.activeId)[0]
            setActividad(selectedActivity)
        }
    }, [state.activeId])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const EsUnNumero = ['categorias', 'calorias'].includes(e.target.id)
        setActividad({
            ...actividad,
            [e.target.id]: EsUnNumero ? +e.target.value : e.target.value
        })
    }

    const EsValidaActividad = () => {
        const { name, calorias } = actividad
        return name.trim() !== '' && calorias > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!EsValidaActividad()) return

        dispatch({ type: 'guardar-actividad', payload: { nuevaActividad: actividad } })

        setActividad({
            ...initialState,
            id: uuidv4(),
            categorias: actividad.categorias // Mantener la categoría seleccionada
        })

    }


    return (
        <form className=" space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="categorias" className="font-bold">Categoria:</label>
                <select className="border border-slate-300 p-2 rounder-lg w-full bg-white" id="categorias"
                    value={actividad.categorias}
                    onChange={handleChange}>

                    {categorias.map(categoria => (
                        <option
                            key={categoria.id}
                            value={categoria.id}>
                            {categoria.name}
                        </option>
                    ))}
                </select>

            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida,Zumo de naranja , Ensalada, Ejercicio,Pesas, Bicicleta"
                    value={actividad.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calorias" className="font-bold">Calorias:</label>
                <input
                    id="calorias"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Calorias - 300  , 500 ..."
                    value={actividad.calorias}
                    onChange={handleChange}

                />
            </div>

            <input type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-50"
                value="Guardar"
                disabled={!EsValidaActividad()}
            />
        </form>
    )
}
