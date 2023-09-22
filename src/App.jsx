
import './App.css';

function App() {
  const addHandler = event =>{
event.preventDefault()
const form = event.target;
const name = form.name.value;
const email =form.email.value;
const user = {name, email};
console.log(user)

// user to server site data send start
fetch('http://localhost:5000/users',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify(user) //body r bitor data patassi tai {body}
})
.then(res=>res.json())
.then(data =>{
  console.log(data);
  if (data.insertedId) {
    alert("user added Successfully")
    form.reset()
  }
})
// user to server site data send end


  }


  return (
<>
<p>Simple Crud</p>
<form onSubmit={addHandler}>
  <input  type='text' name='name' id=''/>
  <br />
  <input type='email' name='email' id=""/>
  <br />
  <input type="submit" value='Add User'/>
 
</form>
</>
  )
}

export default App
