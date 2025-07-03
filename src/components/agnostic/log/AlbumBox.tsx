import StarRating from "./StarRating";

type AlbumBoxProps = {
  artist: string;
  album_title: string;
  rating: number;
  review: string;
  cover_url: string;

  rym_link: string;
};

const AlbumBox: React.FC<AlbumBoxProps> = ({
  artist,
  album_title,
  rating,
  review,
  cover_url,
  rym_link,
}) => {
  function handleClick() {
    window.open(rym_link, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      className="cursor-pointer w-50 h-50 group transition-transform ease-in-out duration-300 hover:scale-150 hover:z-20 font-space-mono text-2xl text-darkmode-text-col1"
      onClick={handleClick}
    >
      {/* Title */}
      <div className="transition-transform text-sm ease-in-out duration 300 scale-100 group-hover:scale-75 h-fit w-full text-center line-clamp-1">
        {album_title} by {artist}
      </div>
      {/* AlbumCover */}
      <div className="relative group w-full h-full text-sm overflow-hidden">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm"
          style={{ backgroundImage: `url(${cover_url})` }}
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200" />

        {/* Foreground content */}
        <div className="relative z-10 w-full h-full">
          <div className="hidden group-hover:block h-full w-full overflow-y-scroll py-5 px-2 scrollbar-hidden">
            <p className="text-[8px] text-center">{review}</p>
          </div>

          <div className="group-hover:hidden absolute bottom-0 w-full bg-black/50">
            <StarRating rating={rating} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumBox;
