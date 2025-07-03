import AlbumBox from "./AlbumBox";
import { monthlyMusic } from "../../../data/log_data";

type SongsGridProps = {};

const SongsGrid: React.FC<SongsGridProps> = () => {
  const albumTest = monthlyMusic[2025].july[0];
  const albumTest2 = monthlyMusic[2025].june[0];

  return (
    <div className="grid grid-cols-2 gap-2">
      <AlbumBox {...albumTest} />
      <AlbumBox {...albumTest2} />
    </div>
  );
};

export default SongsGrid;
