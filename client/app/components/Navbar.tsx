import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex sticky justify-between border border-red-600">
        <div>nav left side</div>
        <div>
          <Link href="/login">Login</Link>
          <Link href="/sign-up">Signup</Link>
        </div>
      </nav>
  )
}

export default Navbar