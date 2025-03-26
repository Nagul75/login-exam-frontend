import Header from "./ui/Header"
import Sidebar from "./ui/Sidebar"

function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Header title="Generic Website" loggedIn={false}></Header>
      <div className="flex-1 flex mt-5 overflow-hidden">
        <Sidebar></Sidebar>
        <main className="flex-1 p-4 ml-40 mt-18">
          <h1 className="text-white">This is where <strong className="text-fuchsia-700">settings</strong> would be.</h1>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home