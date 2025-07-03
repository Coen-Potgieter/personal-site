import SongsGrid from "../components/agnostic/log/SongsGrid";

const LogPage: React.FC = () => {
  return (
    <div className="flex w-full h-full justify-center pb-[50vh] pt-[15vh]">
      <div className="flex flex-wrap w-10/12 justify-center items-center gap-y-10 gap-x-5">
        <SongsGrid />
      </div>
    </div>
  );
};

export default LogPage;
