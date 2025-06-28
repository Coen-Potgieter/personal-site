import GitHubSVG from "../../../assets/GitHubSVG";
import PageNavButton from "./desktop/PageNavButton";

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="flex pt-[10vh] pl-[5vw] h-screen w-screen font-tinos">
      <div className="w-[50vw]">
        <div className="flex flex-col h-3/12">
          <h1 className="text-6xl font-bold text-my-light-text1">
            Coen Potgieter
          </h1>
          <p className="text-3xl text-my-light-text1">Data Engineer</p>
          <p className="text-my-light-text2">I like coding things</p>
        </div>
        <div className="flex flex-col h-7/12 justify-start items-start">
          <PageNavButton label="ABOUT" isActive={false} />
          <PageNavButton label="EXPERIENCE" isActive={true} />
        </div>
        <div className="flex flex-col pl-10 text-my-light-text1">
          <GitHubSVG size={30} />
        </div>
      </div>

      <div className="flex flex-col w-[50vw] overflow-y-scroll">
        <h1 className="text-4xl text-my-light-text1">About</h1>
        <p className="text-lg text-my-light-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum
          mi sit amet lorem dignissim fermentum. Vivamus vitae commodo neque.
          Mauris semper est augue, non facilisis leo scelerisque vitae. Quisque
          efficitur dui elit, vel faucibus lorem feugiat in. Nam vitae tortor
          tortor. Fusce tristique scelerisque nunc nec iaculis. Proin vestibulum
          ut est a cursus. Quisque molestie metus sed odio molestie placerat.
          Aenean ac ante sed magna dictum blandit. Quisque pharetra aliquet
          tincidunt. Phasellus tincidunt sodales velit quis feugiat.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
