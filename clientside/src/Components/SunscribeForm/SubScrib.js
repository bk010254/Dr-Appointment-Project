import React from 'react'

const SubScrib = () => {
  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-medium">Get more updates...</h2>
      <p className="mt-2 text-sm text-gray-600">
        Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools.
      </p>
      <form className="mt-4 flex flex-col sm:flex-row">
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md sm:rounded-r-none sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 sm:mb-0"
          placeholder="Your email address..."
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 text-white bg-blue-500 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-xs text-gray-600">
        By subscribing, you agree with ConvertKit's <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
      </p>
    </div>
  )
}

export default SubScrib
