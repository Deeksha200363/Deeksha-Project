import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-5">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Click on the link to view the pages</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/page1"
              className="text-lg text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Screen 1
            </Link>
          </li>
          <li>
            <Link
              to="/page2"
              className="text-lg text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Screen 2
            </Link>
          </li>
          <li>
            <Link
              to="/page3"
              className="text-lg text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Screen 3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Info;
