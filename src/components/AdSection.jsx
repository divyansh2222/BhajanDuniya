function AdSection() {
    return (
      <div className="bg-white shadow-lg p-4 w-fit">
        <h3 className="text-lg font-bold text-gray-800">Sponsored Ad</h3>
        <img src="/ad-placeholder.jpg" alt="Ad" className="mt-2 w-full h-40 object-cover rounded" />
        <p className="text-sm text-gray-600 mt-2">Check out our latest offers!</p>
      </div>
    );
  }
  
  export default AdSection;
  