function YoutubeVideo() {
    return (
      <div className="bg-white shadow-lg mb-9 p-4 w-full max-w-2xl mx-auto">
        <div className="relative w-full pb-[56.25%] h-0"> {/* Aspect Ratio 16:9 */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/2iUuiHhskOE"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default YoutubeVideo;
  