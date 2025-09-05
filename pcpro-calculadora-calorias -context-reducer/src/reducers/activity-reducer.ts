
import type { Actividades } from "../types"

export type ActividadActionsType =
    { type: 'guardar-actividad', payload: { nuevaActividad: Actividades } } |
    { type: 'set-activeID', payload: { id: Actividades['id'] } } |
    { type: 'delete-activity', payload: { id: Actividades['id'] } } |
    { type: 'restart-app' }

export type ActivityState = {
    actividades: Actividades[],
    activeId: Actividades['id']
}

const localStorageActivities = (): Actividades[] => {
    const actividades = localStorage.getItem('actividades')
    return actividades ? JSON.parse(actividades) : []
}

export const initialState: ActivityState = {
    actividades: localStorageActivities(),
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActividadActionsType
) => {

    if (action.type === 'guardar-actividad') {

        let updateActividades: Actividades[] = []

        if (state.activeId) {
            updateActividades = state.actividades.map(Actividades => Actividades.id === state.activeId ? action.payload.nuevaActividad : Actividades)
        } else {
            updateActividades = [...state.actividades, action.payload.nuevaActividad]
        }


        return {
            ...state,
            actividades: updateActividades,
            activeId: ''
        }
    }

    if (action.type === 'set-activeID') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if (action.type === 'delete-activity') {
        return {
            ...state,
            actividades: state.actividades.filter(actividad => actividad.id !== action.payload.id)
        }
    }

    if (action.type === 'restart-app'){
        return {
            actividades: [],
            activeId: ''
        }
    }

    return state

}