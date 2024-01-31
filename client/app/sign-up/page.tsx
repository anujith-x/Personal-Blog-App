import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  
  return (
    <div>
      <form action="/signUp" method='POST'>
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={''} placeholder='email'/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" value={''} placeholder='password'/>
        <label htmlFor="">Confirm Password</label>
        <input type="password" name="" id="" placeholder='Re-enter Password'/>
        <input type="submit" value="Signup" className='cursor-pointer'/>
      </form>
    </div>
  )
}

export default SignUp