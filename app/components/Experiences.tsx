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
    <div className=' hidden sm:block lg:px-40 xl:px-56 py-4'>
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