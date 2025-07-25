type DocumentSVGProps = {
  size: number;
};
const DocumentSVG: React.FC<DocumentSVGProps> = ({ size }) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="iconify iconify--fxemoji"
    preserveAspectRatio="xMidYMid meet"
    fill="#000000"
    width={size}
    height={size}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#F9E7C0"
        d="M437.567 512H88.004a8.182 8.182 0 0 1-8.182-8.182V8.182A8.182 8.182 0 0 1 88.004 0H288.79l156.96 156.96v346.858a8.183 8.183 0 0 1-8.183 8.182z"
      />
      <path
        fill="#EAC083"
        d="M288.79 0l156.96 156.96H322.152c-18.426 0-33.363-14.937-33.363-33.363V0z"
      />
      <path
        fill="#597B91"
        d="M235.078 92.401H126.453c-6.147 0-11.13-4.983-11.13-11.13s4.983-11.13 11.13-11.13h108.625c6.147 0 11.13 4.983 11.13 11.13s-4.983 11.13-11.13 11.13zm11.13 61.723c0-6.147-4.983-11.13-11.13-11.13H126.453c-6.147 0-11.13 4.983-11.13 11.13s4.983 11.13 11.13 11.13h108.625c6.147 0 11.13-4.983 11.13-11.13zm0 72.854c0-6.147-4.983-11.13-11.13-11.13H126.453c-6.147 0-11.13 4.983-11.13 11.13s4.983 11.13 11.13 11.13h108.625c6.147-.001 11.13-4.983 11.13-11.13zm94.038 72.853c0-6.146-4.983-11.13-11.13-11.13H126.453c-6.147 0-11.13 4.983-11.13 11.13s4.983 11.13 11.13 11.13h202.663c6.147 0 11.13-4.983 11.13-11.13zm37.493-72.853c0-6.147-4.983-11.13-11.13-11.13h-74.985c-6.146 0-11.13 4.983-11.13 11.13s4.983 11.13 11.13 11.13h74.985c6.147-.001 11.13-4.983 11.13-11.13zM299.92 372.685c0-6.146-4.983-11.13-11.13-11.13H126.453c-6.147 0-11.13 4.983-11.13 11.13s4.983 11.13 11.13 11.13H288.79c6.147-.001 11.13-4.984 11.13-11.13zm66.21 72.853c0-6.146-4.983-11.13-11.13-11.13H126.453c-6.147 0-11.13 4.983-11.13 11.13s4.983 11.13 11.13 11.13H355c6.146 0 11.13-4.983 11.13-11.13z"
      />
    </g>
  </svg>
);

export default DocumentSVG;
