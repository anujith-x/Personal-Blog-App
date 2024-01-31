import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="email" name='email' placeholder='email'/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" placeholder='password'/>
        <input type="submit" value="Login" className='cursor-pointer'/>
      </form>
    </div>
  )
}

export default Login