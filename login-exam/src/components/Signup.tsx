import Header from "./ui/Header"
import Sidebar from "./ui/Sidebar"
import RegistrationForm from "./ui/RegistrationForm"

function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Header title="Generic Website" loggedIn={false}></Header>
      <div className="flex-1 flex mt-5 overflow-hidden">
        <Sidebar></Sidebar>
        <main className="flex-1 p-4 ml-68">
          <RegistrationForm></RegistrationForm>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home
