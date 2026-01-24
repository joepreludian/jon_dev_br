import { createFileRoute } from "@tanstack/react-router";
import Button from "@/components/Button";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="lg:flex lg:gap-6 mt-2">
        <img
          src="/pic_jon.png"
          alt="Jon's Pic"
          className="rounded-lg mx-auto"
        />
        <div className="mt-10 lg:mt-0 lg:flex-1 text-justify">
          <p>
            I'm a software Engineer with more than 20 years of experience in
            Software development.
          </p>
          <p className="mt-4">
            Also I have knowledge in Backend, Frontend and Devops. I can manage
            a project end-to-end, from architecture to prod release.{" "}
          </p>
          <p className="mt-4">
            I worked as a Tech Lead, driving a team to enable a resilient mobile
            app. Feel free to get in touch!{" "}
            <i className="hn hn-thumbsup text-3xl" />{" "}
          </p>
          <div className="mt-4 flex gap-4">
            <Button
              to="https://linkedin.com/in/joepreludian"
              target="_blank"
              className="p-10"
            >
              <i className="text-xl crt-effect hn hn-linkedin" />
              <span>Linkedin</span>
            </Button>
            <Button
              to="https://github.com/joepreludian"
              target="_blank"
              className="p-10"
            >
              <i className="text-xl crt-effect hn hn-github" />
              <span>Github</span>
            </Button>
            <Button to="https://blog.jon.dev.br/" target="_blank">
              <i className="text-xl crt-effect hn hn-edit" />
              <span>Blog</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
