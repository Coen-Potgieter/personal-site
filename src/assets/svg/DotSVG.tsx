type DotSVGProps = {
  size: number;
  className: string;
};
const DotSVG: React.FC<DotSVGProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 448 448"
    className={className}
  >
    <circle
      style={{
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 30,
        strokeLinecap: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
        fill: "currentColor",
      }}
      cx={224}
      cy={828.362}
      r={192}
      transform="translate(0 -604.362)"
    />
  </svg>
);
export default DotSVG;
