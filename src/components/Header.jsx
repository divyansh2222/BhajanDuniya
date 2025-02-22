import { useState } from "react";
import { useBhajan } from "../context/BhajanContext";

function Header() {
  const { setSearchQuery } = useBhajan(); // Get the search function from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-300 to-yellow-100 p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <h1 className="text-2xl font-bold text-green-800">भजन दुनिया</h1>

        {/* Search Bar (Visible on Laptop/Desktop - Right Side) */}
        <div className="hidden sm:flex gap-2">
          <input
            type="text"
            placeholder="Search Bhajans..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-400 px-4 py-2 rounded-md text-white">
            Go
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-green-800 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Search Bar (Visible on Mobile - Below Title) */}
      {isMenuOpen && (
        <div className="flex flex-col gap-2 mt-3 sm:hidden">
          <input
            type="text"
            placeholder="Search Bhajans..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-400 px-4 py-2 rounded-md text-white">
            Go
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
