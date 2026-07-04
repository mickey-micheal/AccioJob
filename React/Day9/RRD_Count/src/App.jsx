import Error from "./Components/Error"

function App() {

  return (

    <div onClick={() => {
      {for (let index = 0; index < 100; index++) {
        console.log(index)
      }}
    }}>yes
      <Error/>
    </div>
  )
}

export default App

