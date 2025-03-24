import Header from "./components/ui/Header"
import Sidebar from "./components/ui/Sidebar"

function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Header title="Generic Website" loggedIn={false}></Header>
      <div className="flex-1 flex mt-5 overflow-hidden">
        <Sidebar></Sidebar>
        <main className="flex-1 p-4 ml-4">
          <h1 className="text-white">Hello this is the main content</h1>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home
