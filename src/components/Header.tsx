export default function Header() {
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
      </div>
      <a href="https://blog.jon.dev.br/" target="_blank" rel="noopener">
        <div className="site-box site-box-bright lg:mt-0 mt-6">
          <div className="flex items-center gap-2">
            <i className="text-xl crt-effect hn hn-edit text-black" />
            <span className="text-black">Visit my Blog</span>
          </div>
        </div>
      </a>
    </div>
  );
}
