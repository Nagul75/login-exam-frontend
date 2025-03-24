import Header from "./ui/Header"
import Sidebar from "./ui/Sidebar"
import LoginForm from "./ui/LoginForm"

function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Header title="Generic Website" loggedIn={false}></Header>
      <div className="flex-1 flex mt-5 overflow-hidden">
        <Sidebar></Sidebar>
        <main className="flex-1 p-4 ml-68">
          <LoginForm></LoginForm>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home
