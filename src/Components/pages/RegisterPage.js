import React, { useState } from 'react'

export default function RegisterPage() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
 async function register(ev){
       ev.preventDefault();
       const response = await fetch('https://mern-back-end-jug7.onrender.com/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        alert('registration successful');
      } 
      else {
        alert('registration failed');
      }
    
      
  }
  return(
    <form className='register' onSubmit={register}>
      <h1>Register</h1>
     <input type='text' placeholder='username' 
      value={username} 
      onChange={ev =>setUsername(ev.target.value)}/>
     <input type='password' placeholder='passwrod'
      value={password}
      onChange={ev =>setPassword(ev.target.value)}/>
     <button >Register</button>
    </form> 
     )
}
// export default RegisterPage
// import { useState } from "react";
// export default function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   async function register(ev) {
//     ev.preventDefault();
//     try {
//       const response = await fetch('http://localhost:4000/register', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         alert('Registration successful');
//       } else {
//         const data = await response.json();
//         throw new Error(data.message || 'Registration failed');
//       }
//     } catch (error) {
//       setError(error.message || 'Failed to fetch');
//     }
//   }
//   return (
//     <form className="register" onSubmit={register}>
//       <h1>Register</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(ev) => setUsername(ev.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(ev) => setPassword(ev.target.value)}
//       />
//       <button type="submit">Register</button>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//     </form>
//   );
// }

// https://github.com/dejwid/mern-blog
// mongoose.connect('mongodb+srv://esakkiselvam792:07092002@cluster0.uzaw2cz.mongodb.net/?retryWrites=true&w=majority')
