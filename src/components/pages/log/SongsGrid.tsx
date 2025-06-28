import { monthlyMusic } from "../../../data";

type SongsGridProps = {};

const SongsGrid: React.FC<SongsGridProps> = () => {
  return (
    <>
      <div className="text-white text-3xl">
        {Object.keys(monthlyMusic).map((year, id) => (
          <div key={id}>
            <p key={id}>{year}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SongsGrid;
