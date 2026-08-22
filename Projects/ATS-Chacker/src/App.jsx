import Display from "./Components/Display"
import Input from "./Components/Input"

const App = () => {
  return (
    <>

      <nav className="flex justify-center bg-amber-300 h-[10vh]">
        <h1 className="text-4xl flex items-center">ATS-Chacker</h1>
      </nav>

        <div className="flex justify-around ">
          <Input/>
          <Display/>
        </div>
    </>
  )
}

export default App
