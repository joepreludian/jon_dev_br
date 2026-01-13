// import { Link } from '@tanstack/react-router'


import Button from "@/components/Button.tsx";
import {Link} from "@tanstack/react-router";

export default function Header() {

  return (
    <div className="container mx-auto pb-10 pt-16 border-b-2 lg:flex lg:items-baseline lg:justify-between">
        <div>
            <div className="lg:flex gap-4 place-items-center">
                <header className="flex gap-2 items-center"> {/* <User2 className="w-10 h-10 crt-effect" /> */}
                    <i className="text-4xl crt-effect hn hn-technology mr-2" /> <h1 className="text-5xl font-bold">Jon Trigueiro</h1>
                </header>
                <header>
                    Fullstack Engineer | Brazil
                </header>
            </div>
            <nav>
                <ul className="flex gap-2 text-2xl mt-4 text-site-accent overflow-x-scroll text-nowrap">
                    <li>
                        <Button to="/">
                            <i className="text-xl crt-effect hn hn-user py-1" /><span>Me</span>
                        </Button>
                    </li>
                    <li>
                        <Button to="/demo/tanstack-query">
                            <i className="text-xl crt-effect hn hn-copy py-1" /><span>Resume</span>
                        </Button>
                    </li>

                </ul>
            </nav>
        </div>
            <Link to="/demo/tanstack-query">
                <div className="site-box site-box-bright lg:mt-0 mt-6">
                <div className="flex items-center gap-2" >
                    <i className="text-xl crt-effect hn hn-download text-black" />
                    <span className="text-black">Download Resume</span>
                </div>
                </div>
            </Link>
    </div>
  )
}
