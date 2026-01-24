export default function PageNotFound() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-4xl">
        <i className="hn hn-exclamation-triangle"></i> Page not found
      </h1>
      <p className="mt-4">The resource you are looking for does not exist.</p>
    </div>
  );
}
