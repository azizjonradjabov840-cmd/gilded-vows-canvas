import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">Sahifa topilmadi</p>
        <Link to="/" className="mt-6 inline-block underline">Bosh sahifa</Link>
      </div>
    </div>
  );
}
