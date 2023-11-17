import { Inter } from 'next/font/google'
import Home from "./component/Home"
import SearchAppBar from './component/AppBar'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <>
      <SearchAppBar />
      <Home />
      
    </>

  )
}
