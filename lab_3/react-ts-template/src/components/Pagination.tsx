import React from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { v4 } from 'uuid';

export interface PaginationPropType {
  max: number;
}

const Pagination: React.FC<PaginationPropType> = ({ max }) => {
  const pagesToShow = 7;
  const { page } = useParams();
  const current = Number(page);
  const parentPath = useLocation().pathname.split('/')[1];
  const min = 0;
  const interval = { start: 0, end: 0 };
  if (current - pagesToShow / 2 <= 0) {
    interval.start = min;
    interval.end = pagesToShow;
  } else if (current + pagesToShow / 2 >= max) {
    interval.start = max - pagesToShow;
    interval.end = max;
  } else {
    interval.start = current - pagesToShow / 2;
    interval.end = current + pagesToShow / 2;
  }
  const pages = [...Array(max).keys()]
    .map((e) => e + 1)
    .slice(interval.start, interval.end);

  const activeStyle =
    'cursor-pointer z-10 px-3 py-2 leading-tight text-red-600 border border-red-300 bg-blue-50 hover:bg-red-100 hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
  const notActiveStyle =
    'cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  return (
    <div className="container mx-auto flex justify-center pb-10">
      <nav>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <Link
              to={`../${parentPath}/page/${current - 1}`}
              className="cursor-pointer block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>

          {pages.map((e) => {
            return (
              <li key={v4()}>
                <Link
                  className={e === current ? activeStyle : notActiveStyle}
                  to={`../${parentPath}/page/${e}`}
                >
                  {e}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              to={`../${parentPath}/page/${current + 1}`}
              className="cursor-pointer block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
