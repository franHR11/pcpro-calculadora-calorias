
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
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
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

        let updateActivities: Actividades[] = []

        if (state.activeId) {
            updateActivities = state.actividades.map(Actividades => Actividades.id === state.activeId ? action.payload.nuevaActividad : Actividades)
        } else {
            updateActivities = [...state.actividades, action.payload.nuevaActividad]
        }


        return {
            ...state,
            actividades: updateActivities,
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
            actividades: state.actividades.filter(activity => activity.id !== action.payload.id)
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