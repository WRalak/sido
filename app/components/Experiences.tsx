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
    <div className=' lg:px-44 hidden md:block'>
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