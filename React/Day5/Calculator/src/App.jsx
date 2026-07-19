import Calculator from "./Components/Calculator";
// import Demo from "./Components/Demo";


const App = () => {
  return (
    <div 
    style={{height : "100vh",
           display : "flex", 
           justifyContent : "center",
           alignItems : "center"

    }}>

      <Calculator/>

        {/* <Demo/> */}

    </div>
  )
}

export default App