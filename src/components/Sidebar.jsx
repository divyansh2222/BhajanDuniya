import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const bhajans = [
    "कृष्ण भजन", "शिव भजन", "हनुमान भजन",
    "साई भजन", "दुर्गा भजन", "गणेश भजन", "राम भजन",
    "गुरुदेव भजन", "विष्णु भजन", "बाबा बालक नाथ भजन",
    "देश भक्ति भजन", "खाटू श्याम भजन", "शनि देव भजन"
  ];

  return (
    <aside className="p-4 border-r shadow-md">
      {/* Desktop View */}
      <div className="hidden md:block w-[300px] bg-gray-100 p-4">
        <h2 className="text-lg font-semibold text-orange-700">नवीनतम भजन</h2>
        <ul className="mt-2 space-y-2">
          {bhajans.map((item, index) => (
            <li key={index} className="border-b pb-1 text-blue-800 hover:text-orange-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg flex items-center gap-2"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          भजन सूची
        </button>

        {isOpen && (
          <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-orange-700">नवीनतम भजन</h2>
            <ul className="mt-2 space-y-2">
              {bhajans.map((item, index) => (
                <li key={index} className="border-b pb-1 text-blue-800 hover:text-orange-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
