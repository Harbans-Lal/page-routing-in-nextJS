import React from 'react'
import Link from 'next/link'
 const navbar = () => {
  return (
    <div >
        <Link href="/">Home</Link>
        <Link href="/dashboardd">dashboard</Link>
        <Link href="/contact">contact</Link>
        <Link href="/login">login</Link>
    </div>
  )
}

export default navbar;