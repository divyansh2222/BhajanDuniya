function AdSection3() {
    return (
      <div className="bg-white shadow-lg p-4 max-w-xs sm:max-w-md mx-auto rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 text-center">Sponsored Ad</h3>
        <img 
          src="/ad-placeholder.jpg" 
          alt="Ad" 
          className="mt-2 w-full h-40 sm:h-48 object-cover rounded"
        />
        <p className="text-sm text-gray-600 mt-2 text-center">
          Check out our latest offers!
        </p>
      </div>
    );
  }
  
  export default AdSection3;  