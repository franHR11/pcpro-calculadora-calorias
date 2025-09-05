import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useActivity } from '../hooks/useActivity';


export default function ActvityList() {
    const { state, dispatch, isEmptyActivities,categoryName  } = useActivity()
    const { actividades } = state  // ✅ Cambiar de activities a actividades
    

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>

            {isEmptyActivities ? <p className="text-center mt-3">No Hay Actividades aun </p> : ''}

            {actividades.map(actividad => {  // ✅ Cambiar activities a actividades
                return (
                    <div key={actividad.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${actividad.categorias === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                                {categoryName(+actividad.categorias)}  
                            </p>
                            <p className="text-2xl font-bold pt-5">{actividad.name}</p>
                            <p className="text-4xl font-black text-lime-500">{actividad.calorias} {''}
                                <span>Calorias</span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({ type: "set-activeID", payload: { id: actividad.id } })}
                            >
                                <PencilSquareIcon className="h-8 w-8 text-gray-800 cursor-pointer" />
                            </button>

                            <button
                                onClick={() => dispatch({ type: "delete-activity", payload: { id: actividad.id } })}
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
