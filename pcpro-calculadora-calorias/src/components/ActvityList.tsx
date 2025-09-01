import type { Actividades } from "../types"
import { categorias } from "../data/categorias"
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import type { ActividadActionsType } from "../reducers/activity-reducer"
import { useMemo } from "react"
type ActivityListProps = {
    activities: Actividades[],
    dispatch: React.Dispatch<ActividadActionsType>
}

export default function ActvityList({ activities, dispatch }: ActivityListProps) {
    
    const categoryName = useMemo(() => 
    (categoryId: Actividades['categorias']) => categorias.find(cat => cat.id === categoryId)?.name ?? '', [activities])
const isEmptyActivities = useMemo (() => activities.length === 0, [activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>

            {isEmptyActivities ? <p className="text-center mt-3">No Hay Actividades aun </p> :''}

            {activities.map(activity => {
                
                return (
                    <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.categorias === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>{categoryName(+activity.categorias)}</p>
                            <p className="text-2xl font-bold pt-5">{activity.name}</p>
                            <p className="text-4xl font-black text-lime-500">{activity.calorias} {''}
                                <span>Calorias</span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({ type: "set-activeID", payload: { id: activity.id } })}
                            >
                                <PencilSquareIcon className="h-8 w-8 text-gray-800 cursor-pointer" />
                            </button>

                            <button
                                onClick={() => dispatch({ type: "delete-activity", payload: { id: activity.id } })}
                            >
                                <XCircleIcon className="h-8 w-8 text-red-500 cursor-pointer" />
                            </button>

                        </div>
                    </div>
                )
            })}
        </>
    )
}
