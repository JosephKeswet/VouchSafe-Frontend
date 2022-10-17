import React from 'react'
import Card from '../../components/dashboard/Card'
import Navbar from '../../components/dashboard/Navbar'
import Summary from '../../components/dashboard/Summary'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='mx-[50px]'>
      <Navbar/>
      <Summary/>
    </div>
  )
}

export default index