import UserCard from "./UserCard";

const UserList = () => {

    const users = [
      { id: 1, name: "Mickey", role: "MERN Developer" , isAvailable: true},
      { id: 2, name: "Rahul", role: "Frontend Developer" ,isAvailable: true},
      { id: 3, name: "Aman", role: "Backend Developer" ,isAvailable: true},
      { id: 4, name: "Priya", role: "UI/UX Designer" ,isAvailable: false}
    ];

  return (
    <>
        {users.map((item , index) => {
           return (
            <div key={index}>
                <h3>{item.id}</h3>
                <h1>{item.name}</h1>
                <h2>{item.role}</h2>
                <h3>{item.isAvailable ? "Available" : "Not Available"}</h3>
            </div>
           )
        })}

        <br />

        {users.map((user) => (
          <UserCard id={user.id}name={user.name}role={user.role} student={user.isAvailable}/>
        ))} 
    </>
  )
}

export default UserList