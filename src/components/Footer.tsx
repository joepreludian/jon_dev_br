export default function Footer() {
  return (
    <div className="container mx-auto py-6 border-t-2 mt-4 lg:flex lg:items-center lg:place-content-between">
      <div className="flex items-center gap-2">
        <i className="hn hn-at"></i> <span>me@jon.dev.br</span>
      </div>
      <div className="flex items-center gap-2">
        <i className="hn hn-globe-americas-solid"></i>{" "}
        <span>jon.dev.br / AI Free content / 2026</span>
      </div>
    </div>
  );
}
