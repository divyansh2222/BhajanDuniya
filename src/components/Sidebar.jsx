function Sidebar() {
  const bhajans = [
    "कृष्ण भजन", "शिव भजन", "हनुमान भजन",
    "साई भजन", "दुर्गा भजन", "गणेश भजन", "राम भजन",
    "गुरुदेव भजन", "विष्णु भजन", "बाबा बालक नाथ भजन",
    "देश भक्ति भजन", "खाटू श्याम भजन", "शनि देव भजन"
  ];

  return (
    <aside className="hidden md:block w-[300px]  bg-gray-100 p-4 border-r shadow-md">
      <h2 className="text-lg font-semibold text-orange-700">नवीनतम भजन</h2>
      <ul className="mt-2 space-y-2">
        {bhajans.map((item, index) => (
          <li key={index} className="border-b pb-1 text-blue-800 hover:text-orange-600 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
