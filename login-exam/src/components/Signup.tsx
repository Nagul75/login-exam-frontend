import Header from "./ui/Header"
import Sidebar from "./ui/Sidebar"
import RegistrationForm from "./ui/RegistrationForm"

function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Header title="Generic Website" loggedIn={false}></Header>
      <div className="flex-1 flex">
        <Sidebar></Sidebar>
        <main className="flex-1 p-4 ml-105 mt-18">
          <RegistrationForm></RegistrationForm>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home
