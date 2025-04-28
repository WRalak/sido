import React from 'react'

import Nedbank from './Nedbank'
import Gold from './Gold'
import Ventures from './Ventures'
import Andela from './Andela'
import Brk from './Brk'
import Cyton from './Cyton'
import Yiello from './Yiello'

const Experiences = () => {
  return (
    <div className=' hidden md:flex flex-col '>
      <Nedbank/>
      <Gold/>
      <Ventures/>
      <Andela/>
      <Brk/>
      <Cyton/>
      <Yiello/>
    </div>
  )
}

export default Experiences