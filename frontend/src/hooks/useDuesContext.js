import { DuesContext } from '../context/DuesContext'
import { useContext } from 'react'

export const useDuesContext = () => {
  const context = useContext(DuesContext)

  if (!context) {
    throw Error('useDuesContext must be used inside an DuesContextProvider')
  }

  return context
}