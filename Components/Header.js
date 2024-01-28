import React, { useContext } from 'react'
import Nav from './Nav'
import { Mycontext } from '@/Helper/Context'

const Header = (props) => {
   const user= useContext(Mycontext)
  return (
    <div>{props.num}
    Header {user}
    <Nav />
    </div>
  )
}

export default Header