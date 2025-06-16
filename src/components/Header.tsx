type HeaderProps = {
  height: number;
};
const Header: React.FC<HeaderProps> = ({ height }) => {
  return (
    <div
      className="flex flex-row gap-10 w-full bg-my-green text-white text-xl"
      style={{ height: `${height}vh` }}
    >
      <button className="cursor-pointer hover:bg-my-yellow" type="button">
        <p>Projects</p>
        <p>Showcase</p>
      </button>
      <p>this is a header</p>
    </div>
  );
};

export default Header;
