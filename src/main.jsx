import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '/src/assets/fonts/algerian.ttf'
import '/src/assets/fonts/HysteriaRoller.ttf'
import Router from './routes/index.jsx'

const theme = extendTheme({
  colors: {
    brand: {
      P1: '#2B6B62',
      P2: '#20414F',
      P3: '#354551',
      S1: '#333A3D',
      S2: '#A5A4A4',
      S3: '#1E1E1E',
      hover: '#38c2af'
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </React.StrictMode>,
)
