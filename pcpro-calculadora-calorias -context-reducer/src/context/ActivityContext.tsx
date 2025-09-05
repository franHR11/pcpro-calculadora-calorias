import {  createContext, useReducer, type ReactNode, useMemo } from "react";
import { activityReducer, initialState, type ActividadActionsType, type ActivityState } from "../reducers/activity-reducer";
import { categorias } from "../data/categorias";
import type { Actividades } from "../types";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch : React.ActionDispatch<[action: ActividadActionsType]>
    caloriesConsumed: number
    caloriesFire: number
    caloriesTotal: number
    categoryName: (categoryId: Actividades['categorias']) => string
    isEmptyActivities: boolean
}


export const ActivityContext = createContext<ActivityContextProps>(null!)


export const ActivityProvider = ({ children }: ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)


        // Contadores
    const caloriesConsumed = useMemo(() =>
        state.actividades.reduce((total, actividad) =>
            actividad.categorias === 1 ? total + actividad.calorias : total, 0
        ), [state.actividades]
    );
    const caloriesFire = useMemo(() =>
        state.actividades.reduce((total, actividad) =>
            actividad.categorias === 2 ? total + actividad.calorias : total, 0
        ), [state.actividades]
    );
    const caloriesTotal = useMemo(() => caloriesConsumed - caloriesFire, [state.actividades])

    const categoryName = useMemo(() =>
        (categoryId: Actividades['categorias']) => categorias.find(cat => cat.id === categoryId)?.name ?? '', [state.actividades])  // ✅ Cambiar [activities] a [actividades]
        
    const isEmptyActivities = useMemo(() => state.actividades.length === 0, [state.actividades])  // ✅ Cambiar activities a actividades
    
    return (
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesFire,
            caloriesTotal,
            categoryName,
            isEmptyActivities
        }}>
            {children}
        </ActivityContext.Provider>
    )


}