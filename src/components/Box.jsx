import { useNavigate } from "react-router-dom";
function Box({ name, imageUrl , lyrics,category,likes}) {
  const navigate = useNavigate();
   

  const handleClick = () => {
    console.log("Navigating to About:", name); // ✅ Console the title
    navigate(`/bhajan/${encodeURIComponent(name,lyrics)}`);
    
  };
  return (
    <div onClick={handleClick} className="w-68 bg-white  shadow-[5px_5px_10px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_15px_rgba(0,0,0,0.4)]    overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-38 object-contain  transition-transform transform hover:scale-108" />
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
