export function generateStaticParams() {
  return [
    { notFound: "example-path" }, // Add at least one static path
  ];
}

export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}