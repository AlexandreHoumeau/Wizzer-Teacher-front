import React from "react";

const Table = ({ columns, dataSource }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xsfont-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Role
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1619914775389-748e5e136c26?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4MjAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Flora Wu
                </div>
                <div className="text-sm text-gray-500">
                  flora.wu@example.com
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">Software engineer</div>
            <div className="text-sm text-gray-500">IT</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1620037624682-f9c156d0286f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4Mzc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Nida Povey
                </div>
                <div className="text-sm text-gray-500">
                  nida.povey@example.com
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">CMO</div>
            <div className="text-sm text-gray-500">Marketing</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-fullbg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Member
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4NDAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Warren Nixon
                </div>
                <div className="text-sm text-gray-500">
                  warren.nixon@example.com
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">Designer</div>
            <div className="text-sm text-gray-500">UI/UX</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Owner
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
