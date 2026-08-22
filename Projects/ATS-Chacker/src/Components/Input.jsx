
const Input = () => {
  return (
    <div className="w-[50vw] h-[90vh]">

       <div className="flex flex-col">

          <label htmlFor="input">Resume PDF</label>
          
          <input id="input" type="file" />

       </div>

       <div className="flex flex-col">

           <label htmlFor="jd">Job Description</label>

           <textarea name="" id="jd"></textarea>

       </div>

       <button>Chack Resume</button>
        
    </div>
  )
}

export default Input
