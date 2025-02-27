import { useNavigate } from "react-router-dom";

function Box({ id, name, imageUrl, category, likes }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to Bhajan:", id); // Use ID instead of name
    navigate(`/bhajan/${id}`); // Navigate using a clean ID-based URL
  };

  return (
    <div onClick={handleClick} className="w-68 bg-white shadow-md hover:shadow-lg overflow-hidden cursor-pointer">
      <img src={imageUrl} alt={name} className="w-full h-38 object-contain transition-transform transform hover:scale-105" />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
      </div>
      <div className="flex justify-between items-center pb-2 px-4 text-sm text-gray-600">
        <p>{category}</p>
        <p>{likes}</p>
      </div>
    </div>
  );
}

export default Box;
