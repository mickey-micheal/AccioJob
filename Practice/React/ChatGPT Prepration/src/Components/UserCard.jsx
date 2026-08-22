
const UserCard = ({id , name, role , student }) => {

    // const name = "Mickey";
    // const role = "MERN Developer";

  return (
    <div>
        <h1>Name : {name}</h1>
        <h2>Role : {role}</h2>
        <h3>id : {id}</h3>
        <h3>Student : {student ? "Available" : "Not Available"}</h3>
    </div>
  )
}

export default UserCard
