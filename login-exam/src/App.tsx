import Header from "./components/ui/Header"
import Sidebar from "./components/ui/Sidebar"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Home() {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(()=> {
    axios.get('http://127.0.0.1:8000/check-auth/', {withCredentials: true})
      .then( res => {
        if(res.data.authenticated) {
          setLoggedIn(true)
          console.log(res.data.username)
        } else {
          navigate("/login")
        }
      })
      .catch(() => {
        setLoggedIn(false)
        navigate("/login")
      })
  }, [])
  return (
    <>
    <div className="flex flex-col">
      <Header title="Generic Website" loggedIn={loggedIn}></Header>
      <div className="flex-1 flex mt-5 overflow-hidden">
        <Sidebar></Sidebar>
        <main className="flex-1 p-4 ml-40 mt-18">
          <h1 className="text-white">Hello this is the main content</h1>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home
