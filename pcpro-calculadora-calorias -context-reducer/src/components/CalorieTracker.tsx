import type { Actividades } from "../types"
import { useMemo } from 'react';
import CalorieDisplay from "./CalorieDisplay";

type CalorietrakerProps = {
    actividades: Actividades[]
}

export default function CalorieTracker({ actividades }: CalorietrakerProps) {


    // Contadores

    const caloriesConsumed = useMemo(() =>
        actividades.reduce((total, actividad) =>
            actividad.categorias === 1 ? total + actividad.calorias : total, 0
        ), [actividades]
    );

    const caloriesFire = useMemo(() =>
        actividades.reduce((total, actividad) =>
            actividad.categorias === 2 ? total + actividad.calorias : total, 0
        ), [actividades]
    );

    const caloriesTotal = useMemo(() => caloriesConsumed - caloriesFire, [actividades])

    return (

        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">

                <CalorieDisplay
                    calories={caloriesConsumed}
                    text='Consumido'
                />

                <CalorieDisplay
                    calories={caloriesFire}
                    text='Ejercicio'
                />

                <CalorieDisplay
                    calories={caloriesTotal}
                    text='Diferencia'
                />

            </div>

        </>
    )
}
