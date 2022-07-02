import React, { useContext } from 'react'
import { AppContext } from '../App'
import Form from './Form'

function Content() {
    const { ticker, setTicker} = useContext(AppContext);
  return (
    <Form />
  )
}

export default Content