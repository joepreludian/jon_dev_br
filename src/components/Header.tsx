// import { Link } from '@tanstack/react-router'


import {User2} from "lucide-react";

export default function Header() {

  return (
    <div className="container mx-auto py-18">
        <header className="flex gap-2 items-center">
            <User2 /> <h1 className="text-4xl">Jon Trigueiro</h1>
        </header>
        <nav>
            <ul className="flex gap-2 text-2xl text-site-accent">
                <li><a href="/">Home</a></li>
                <li><a href="/demo/tanstack-query">Tanstack Query</a></li>
            </ul>
        </nav>
    </div>
  )
}
