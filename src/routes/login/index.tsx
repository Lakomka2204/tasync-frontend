import { useState } from 'react'
import { useCookies } from 'react-cookie';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  const [_,setCookie] = useCookies(['token']);
  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    const res = await fetch('/api/account',{
      method:"POST",
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify({email,password})
    });
    const json = await res.json();
    if (res.ok)
      setCookie('token',json.access_token);
    else {
      setError(json.message);
    }
  }
  return (
    <>
    <h1>Login to the account</h1>
    <form method='POST' onSubmit={(ev) => login(ev)}>
      <input name='email' placeholder='Email' value={email} onChange={(t) => setEmail(t.target.value)} required/>
      <br/>
      <input name='password' type='password' placeholder='Password' value={password} onChange={(t) => setPassword(t.target.value)} required/>
      <br/>
      <input type='submit' value='Login'/>
    </form>
    <p>{errorMessage}</p>
    </>
  )
}

export default Login