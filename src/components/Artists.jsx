import { useState, useEffect } from "react";

const Artists = () => {
  const [artistList, setArtistList] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch("http://localhost:5000/artist");
        const data = await response.json();
        setArtistList(data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtistData();
  }, []);

  const handleViewAll = () => {
    setDisplayCount(artistList.length);
  };

  return (
    <div className="my-24">
      <div className="text-center pb-16">
        <h2 className="text-2xl font-bold text-[#595D62] pb-2">
          FEATURED ARTISTS
        </h2>
        <hr className="w-60 mx-auto border-2 border-[#595D62]" />
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artistList.slice(0, displayCount).map((artist) => (
            <div key={artist.id} className="text-center">
              <img src={artist.image} className="h-96 w-full" alt={artist.name} />
              <h4 className="text-base font-medium py-3">{artist.name}</h4>
              <button className="hover:btn-ghost px-4 py-2 back-main text-white rounded-none">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
      {displayCount < artistList.length && (
        <div className="flex justify-center">
          <button className="btn btn-outline my-10" onClick={handleViewAll}>
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default Artists;
