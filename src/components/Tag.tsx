import { tagColours } from "../helper";
type TagProp = {
  tagName: string;
};

const Tag: React.FC<TagProp> = ({ tagName }) => {
  const fallBackColour = "#aaaaaa";
  return (
    <div className="flex flex-row">
      <p className="font-bold">{tagName}</p>
      <svg
        className="scale-80"
        fill={
          tagColours.has(tagName) ? tagColours.get(tagName) : fallBackColour
        }
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        transform="scale(-1, 1)"
      >
        <g stroke-width="0" />
        <g stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="m8 0 8 8-8 8-8-8V0zM7 2H2v5l6 6 5-5zM4.5 3C5.328 3 6 3.666 6 4.5 6 5.328 5.334 6 4.5 6 3.672 6 3 5.334 3 4.5 3 3.672 3.666 3 4.5 3"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Tag;
