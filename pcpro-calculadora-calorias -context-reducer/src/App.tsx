import { useReducer, useEffect, useMemo } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActvityList from "./components/ActvityList"
import CalorieTracker from "./components/CalorieTracker"



function App() {

  const [state , dispatch] = useReducer(activityReducer, initialState)

useEffect(() => {
if (state?.actividades) {
  localStorage.setItem('activities', JSON.stringify(state.actividades))
}
},[state?.actividades])


const canRestarApp = useMemo(() => (state?.actividades ?? []).length > 0, [state?.actividades])

  return (
    <>
      <header className="bg-lime-600 py-3">

        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">Pcrpo - Contador de Calorias</h1>
          <button className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
          disabled={!canRestarApp}
          onClick={() => dispatch({type: 'restart-app'})}
          >
            Reiniciar App
          </button>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">

        <div className="max-w-4xl mx-auto">

          <Form 
          dispatch ={dispatch}
          state={state}
          />
        </div>
      </section>

      <section className="bg-gray-800 py-10">
<div className="max-w-4xl mx-auto">

  <CalorieTracker
  actividades={state.actividades}
  />

</div>

      </section>

<section className="p-10 mx-auto max-w-4xl">

  <ActvityList
  activities={state?.actividades ?? []}
  dispatch={dispatch}
  />
</section>

    </>
  )
}

export default App
