import { tagColours } from "../../../../data";
type TagProp = {
  tagName: string;
};

const Tag: React.FC<TagProp> = ({ tagName }) => {
  const fallBackColour = "#aaaaaa";
  return (
    <div className="flex items-center justify-center gap-2 px-2 py-1 rounded-full font-space-mono">
      <p className="font-bold text-sm">{tagName}</p>
      <svg
        width="16"
        height="16"
        fill={
          tagColours.has(tagName) ? tagColours.get(tagName) : fallBackColour
        }
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m8 0 8 8-8 8-8-8V0zM7 2H2v5l6 6 5-5zM4.5 3C5.328 3 6 3.666 6 4.5 6 5.328 5.334 6 4.5 6 3.672 6 3 5.334 3 4.5 3 3.672 3.666 3 4.5 3"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Tag;
