import Button from "@/components/Button.tsx";
import { useRouterState } from "@tanstack/react-router";

export default function Header() {
  // @ts-expect-error
  const locationRouter = useRouterState({ select: (s) => s.location }) as any;

  const links = [
    { name: "Me", href: "/", icon: "hn-user" },
    { name: "Opensource", href: "/opensource", icon: "hn-book-heart" },
  ];

  return (
    <div className="container mx-auto pb-10 pt-16 border-b-2 lg:flex lg:items-baseline lg:justify-between">
      <div>
        <div className="lg:flex gap-4 place-items-center">
          <header className="flex gap-2 items-center">
            {" "}
            {/* <User2 className="w-10 h-10 crt-effect" /> */}
            <i className="text-4xl crt-effect hn hn-technology mr-2" />{" "}
            <h1 className="text-5xl font-bold">Jon Trigueiro</h1>
          </header>
          <header>Fullstack Engineer | Pythoneer | Brazil</header>
        </div>
        <nav>
          <ul className="flex gap-2 text-2xl mt-4 text-site-accent overflow-x-scroll text-nowrap">
            {links.map(({ name, href, icon }) => {
              return (
                <li key={name}>
                  <Button
                    to={href}
                    className={
                      locationRouter.pathname === href
                        ? `bg-site-primary/80`
                        : ""
                    }
                  >
                    <i
                      className={`hn ${icon} py-1 ${
                        locationRouter.pathname === href ? `text-black` : ""
                      }`}
                    />
                    <span
                      className={
                        locationRouter.pathname === href ? `text-black` : ""
                      }
                    >
                      {name}
                    </span>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <a href="/public/resume/resume.pdf" target="_blank" rel="noopener">
        <div className="site-box site-box-bright lg:mt-0 mt-6">
          <div className="flex items-center gap-2">
            <i className="text-xl crt-effect hn hn-print-solid text-black" />
            <span className="text-black">Download Resume</span>
          </div>
        </div>
      </a>
    </div>
  );
}
