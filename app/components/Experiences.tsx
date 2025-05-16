import React from 'react'

import Nedbank from './Nedbank'
import Gold from './Gold'
import Ventures from './Ventures'
import Andela from './Andela'
import Brk from './Brk'
import Cyton from './Cyton'
import Yiello from './Yiello'
import Tales from './Tales'

const Experiences = () => {
  return (
    <div className=' hidden max-w-screen-2xl sm:block lg:px-8 xl:px-60 py-4 2xl:px-60  mx-auto '>
      <Nedbank/>
      <Gold/>
      <Ventures/>
      <Andela/>
      <Brk/>
      <Cyton/>
      <Yiello/>
      <Tales/>
    </div>
  )
}

export default Experiences