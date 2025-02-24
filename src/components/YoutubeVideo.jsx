function YoutubeVideo({ url, name }) {
  // Extract video ID from URL
  const getVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(url);

  return (
    <div className="bg-white shadow-lg mb-9 p-4 w-full max-w-2xl mx-auto">
      {videoId ? (
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={name}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className="text-center text-red-500">Invalid YouTube URL</p>
      )}
    </div>
  );
}

export default YoutubeVideo;
