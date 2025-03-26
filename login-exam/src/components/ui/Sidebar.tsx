import { Button } from "./button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return(
        <>
            <div className="w-38 text-white p-4 border-r-2 border-r-stone-800 fixed top-20 left-0 h-[calc(100vh-4rem)] z-40">
                <div className="flex flex-col gap-4">
                <Link to="/settings"><Button variant="link" className="text-white"><ChevronRight/>Settings</Button></Link>
                <Link to="/settings"><Button variant="link" className="text-white"><ChevronRight/>About</Button></Link>
                <Link to="/settings"><Button variant="link" className="text-white"><ChevronRight/>Contacts</Button></Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar