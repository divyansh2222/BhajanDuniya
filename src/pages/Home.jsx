import { useState } from "react";
import { useBhajan } from "../context/BhajanContext";
import AdSection from "../components/AdSection";
import Box from "../components/Box";

function Home() {
  const { data, searchQuery } = useBhajan();

 
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const itemsPerPage = 9; // Adjust the number of bhajans per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get the data for the current page
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-green-100 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-4">
        {/* Bhajan Boxes Grid */}
        <div className="flex flex-wrap gap-7 justify-center">
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
              <Box key={index} title={item.title} imageUrl={item.image} />
            ))
          ) : (
            <p className="text-red-600 text-center w-full">No results found.</p>
          )}
        </div>

        {/* Ad Section (Moves below content on smaller screens) */}
        <aside className="lg:block hidden">
          <AdSection />
        </aside>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ⬅️ Previous
          </button>

          <span className="font-semibold text-lg">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next ➡️
          </button>
        </div>
      )}

      {/* Ad Section for Mobile (Visible only on small screens) */}
      <aside className="lg:hidden mt-6">
        <AdSection />
      </aside>
    </div>
  );
}

export default Home;
