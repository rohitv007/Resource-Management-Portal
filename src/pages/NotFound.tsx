import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid place-content-center h-screen text-center">
      <h1 className="text-3xl">Error 404! Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <Link className="bg-green-400 hover:bg-green-500 w-1/2 m-auto rounded my-4 py-2" to="/">
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
