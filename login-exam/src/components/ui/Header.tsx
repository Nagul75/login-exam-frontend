import { Link } from "react-router-dom";
import { Button } from "./button";
import { Bird, CircleUserRound } from "lucide-react";
import axios from 'axios'

type HeaderProps = {
    title: string,
    loggedIn: boolean,
}

function logout() {
    axios.get("http://127.0.0.1:8000/logout/")
      .then((res) => {console.log(res)})
      .catch((err) => {console.log(err)})
}

const Header = ({title, loggedIn}: HeaderProps) => {
    return (
        <div className="flex col align-middle justify-center">
        <header className="text-stone-100 p-4 w-[95%] border-b-2 border-b-stone-800">
            <div className="flex justify-between items-center">
                <div><Bird size={48}/></div>
                <div>
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-wide" style={{fontFamily: "Open Sans"}}>{title}</h1>
                </div>
                {loggedIn ?
                <>
                    <div className="flex">
                        <Button variant="outline" className="mr-6 bg-stone-900" onClick={logout}>Logout</Button>
                        <CircleUserRound size={32}></CircleUserRound>
                    </div>
                </> :
                <>
                    <div>
                        <Link to="/signup"><Button variant="outline" className="mr-6 bg-stone-900">Signup</Button></Link>
                        <Link to="/login"><Button variant="outline" className="mr-2 bg-stone-900">Login</Button></Link>
                    </div>
                </>}
            </div>
        </header>
        </div>
    )
}

export default Header