import { useSelector } from "react-redux"

const Display = () => {
  const data = useSelector((store) => store)

  return (
    <div>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
};

export default Display
