import { useBhajan } from "../context/BhajanContext";

function Sidebar({ setSelectedCategory }) {
  const { data } = useBhajan();

  // Extract unique categories using a Set
  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  return (
    <aside className="hidden md:block w-[300px] bg-gray-100 p-4 border-r shadow-md">
      <h2 className="text-lg font-semibold text-orange-700">नवीनतम भजन</h2>
      <ul className="mt-2 space-y-2">
        <li
          className="border-b pb-1 text-blue-800 hover:text-orange-600 cursor-pointer font-bold"
          onClick={() => setSelectedCategory(null)} // Show all bhajans
        >
          सभी भजन
        </li>
        {uniqueCategories.map((category, index) => (
          <li
            key={index}
            className="border-b pb-1 text-blue-800 hover:text-orange-600 cursor-pointer"
            onClick={() => setSelectedCategory(category)} // Set selected category
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
