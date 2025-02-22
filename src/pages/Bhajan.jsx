import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AdSection2 from "../components/AdSection2";
import AdSection3 from "../components/Adsection3";

import CommentBox from "../components/CommentBox";
import { useBhajan } from "../context/BhajanContext"; 
import RelatedSongs from "../components/RelatedSongs";
import YoutubeVideo from "../components/YoutubeVideo";

function Bhajan() {
  const { title } = useParams();
  const { data, searchQuery } = useBhajan(); // Get data and search query from context

  // Filter data based on search query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    console.log("Bhajan Title:", title);
  }, [title]);

  const downloadLyrics = () => {
    const lyrics = `
${title}

मन मोहना बड़े झूठे,
हार के हार नहीं माने |

बन के खिलाडी पिया,
निकले अनाड़ी |
मोसे बईमानी की,
मुझ से ही रूठे ||

तुम्हारी यह बंसी कहना,
बनी गल फंसी |
तान सूना के मेरा,
तन मन लूटे ||

स्वर : लता मंगेशकर
श्रेणी : कृष्ण भजन
`;

    // Create a Blob with lyrics
    const blob = new Blob([lyrics], { type: "text/plain" });

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.txt`; // File name

    // Click and remove the anchor
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 bg-green-100 overflow-x-hidden">
      {/* Title */}
      <h1 className="text-2xl text-amber-800 mt-2 md:text-3xl text-center">{title}</h1>
      <p className="text-md text-center">Radhe Shyam Radhe</p>

      {/* Ad Section */}
      <div className="my-4">
        <AdSection2 />
      </div>

      {/* Lyrics Section */}
      <div className="text-lg text-center max-w-2xl mx-auto leading-relaxed">
        <p>मन मोहना बड़े झूठे,<br />हार के हार नहीं माने |</p>
        <br />
        <p>बन के खिलाडी पिया,<br />निकले अनाड़ी |</p>
        <p>मोसे बईमानी की,<br />मुझ से ही रूठे ||</p>
        <br />
        <p>तुम्हारी यह बंसी कहना,<br />बनी गल फंसी |</p>
        <p>तान सूना के मेरा,<br />तन मन लूटे ||</p>
      </div>

      {/* Singer & Category */}
      <div className="text-center mt-5">
        <p className="font-semibold">स्वर : लता मंगेशकर</p>
        <p className="mb-7">श्रेणी : कृष्ण भजन</p>
      </div>

      {/* Second Ad Section */}
      <AdSection3 />

      {/* Download Button */}
      <div className="text-center">
        <button 
          onClick={downloadLyrics} 
          className="my-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          डाउनलोड करें
        </button>
      </div>

      {/* YouTube Video Section */}
      <div className="my-8">
        <YoutubeVideo />
      </div>

      {/* Comment Box */}
      <div className="my-8">
        <CommentBox />
      </div>

      {/* Related Bhajans */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center">मिलते-जुलते भजन...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <RelatedSongs key={index} title={item.title} imageUrl={item.image} />
            ))
          ) : (
            <p className="text-red-600 text-center w-full">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bhajan;
