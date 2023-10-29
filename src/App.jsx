import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Components/Container'
import UserProvider from './Context/UserProvider'
function App() {
  return (
    <>
      <UserProvider>
        <Container />
      </UserProvider>
    </>
  )
}
export default App
