import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Our Hotel. All Rights Reserved.
      </p>
      <p className="text-sm mt-2">
        Follow us on:{" "}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Facebook
        </a>{" "}
        |{" "}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Twitter
        </a>{" "}
        |{" "}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:underline"
        >
          Instagram
        </a>
      </p>
    </div>
  </footer>
  )
}
