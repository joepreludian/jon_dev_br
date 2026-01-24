import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/opensource")({
  component: OpensourcePage,
});

function OpensourcePage() {
  const projectsList = [
    {
      name: "SDCI",
      description:
        "A very simple Continuous Delivery tool. Exposes an API that triggers commands on the server.",
      link: "https://github.com/joepreludian/sdci",
    },
    {
      name: "Resume Generator",
      description:
        "Some other way to build PDF resume using Python Web and Weasyprint. My resume was built using this tool.",
      link: "https://github.com/joepreludian/resume_generator",
    },
    {
      name: "AsaasPy",
      description: "An unofficial python client for Asaas API.",
      link: "https://github.com/joepreludian/asaaspy",
    },
    {
      name: "BrasilAPY",
      description:
        "A python wrapper client with pydantic models for Brasil API.",
      link: "https://github.com/lipe14-ops/brasilapy",
    },
  ];

  return (
    <div className="container mx-auto py-6 contains-text lg:flex lg:gap-10">
      <div className="lg:flex-1 mb-6">
        <h1 className="text-4xl mb-6">
          <i className="hn hn-code"></i> Open source
        </h1>
        <p>
          I try to do my best to contribute to open source projects. I believe
          it's a best way to learn and grow as a developer.
        </p>
        <p>
          I mainly use this approach to contribute to the community and enhance
          my skillset both technical and interpersonal.{" "}
        </p>
        <p>
          You can check my GitHub for the contributions I made, but I would like
          to highlight some points.
        </p>
        <p>
          I assume I didn’t had too much time to work on it, because of family,
          social life and so on, but I hope to spare some time to include it
          into my working week.
        </p>
        <a
          href="https://github.com/joepreludian"
          target="_blank"
          className="inline-block mt-8"
          rel="noopener"
        >
          <div className="is-a-button">
            <div className="w-6 h-6 hn hn-github"></div> <span>Github</span>
          </div>
        </a>
      </div>
      <div className="lg:flex-1">
        <h1 className="text-4xl mb-6">
          <i className="hn hn-github"></i> Some projects
        </h1>
        <ul>
          {projectsList.map(({ name, description, link }) => (
            <li key={name} className="mb-4">
              <Link to={link} className="w-full gap-4" target="_blank">
                <div className="is-a-button">
                  <div className="flex-1 text-wrap">
                    <div className="text-4xl text-left border-b-2 flex gap-4 items-center">
                      <i className="hn hn-github"></i>
                      <span className="flex-1">{name}</span>
                      <i className="hn hn-external-link text-lg"></i>
                    </div>
                    <p>{description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
