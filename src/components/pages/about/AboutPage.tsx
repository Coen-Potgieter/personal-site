import GitHubSVG from "../../../assets/GitHubSVG";
import PageNavButton from "./desktop/PageNavButton";

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="flex flex-col md:flex-row pt-[10vh] pl-[5vw] h-screen w-screen font-tinos">
      <div className="md:w-[50vw] w-screen">
        <div className="flex flex-col h-fit md:h-3/12">
          <h1 className="text-4xl md:text-6xl font-bold text-lightmode-text-col1 dark:text-darkmode-text-col1">
            Coen Potgieter
          </h1>
          <p className="text-3xl text-lightmode-text-col1 dark:text-darkmode-text-col1">
            Data Engineer
          </p>
          <p className="text-lightmode-text-col2 dark:text-darkmode-text-col2">
            I like coding things
          </p>
        </div>
        <div className="hidden md:flex flex-col h-7/12 justify-start items-start">
          <PageNavButton label="ABOUT" isActive={true} />
          <PageNavButton label="PROJECTS" isActive={false} />
          <PageNavButton label="LOG" isActive={false} />
        </div>
        <div className="flex flex-row text-lightmode-text-col1 dark:text-darkmode-text-col1 py-5 md:pl-10 md:pt-0">
          <GitHubSVG size={25} />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex flex-col w-screen md:w-[50vw] overflow-y-scroll pr-10 scrollbar-hidden">
        {/* About Me */}
        <h1 className="text-4xl text-lightmode-text-col1 dark:text-darkmode-text-col1">
          About
        </h1>
        <div className="text-lg text-lightmode-text-col2 dark:text-darkmode-text-col2">
          <p>
            I'm a{" "}
            <span className="dark:text-darkmode-text-col1 text-lightmode-text-col1">
              final-year Data Engineering student at Stellenbosch University
            </span>{" "}
            with a curiosity that's pulled me into a wide range of technical
            rabbit holes — from intersting algorithms and visual simulations to
            neural networks and natural language processing.
          </p>
          <p>
            What I enjoy most is{" "}
            <span className="text-lightmode-text-col1 dark:text-darkmode-text-col1">
              building things that force me to learn a new concept deeply
            </span>
            {", "}
            whether it's a chaotic system, a language model, or a weird
            mathematical trick, that’s when I’m hooked.{" "}
            <span className="text-lightmode-text-col1 dark:text-darkmode-text-col1">
              I tend to go all in
            </span>
            , sometimes to the point of forgetting I still have a degree to
            finish.
          </p>
          <p>
            Outside of code,{" "}
            <span className="text-lightmode-text-col1 dark:text-darkmode-text-col1">
              I read a lot, listen to music obsessively
            </span>
            , and occasionally lose at chess. Right now, I'm balancing academic
            work with personal projects (carefully) trying not to let the latter
            consume the former.
          </p>
          <p>
            This site is a place to log what I’ve built, what I’ve been reading
            or listening to, and things I’ve learned along the way.{" "}
            <span className="text-lightmode-text-col1 dark:text-darkmode-text-col1">
              It's not a pitch — more of a digital garden.
            </span>{" "}
            With that said, if you’re looking for someone who is passionate
            about coding, data, music or books,{" "}
            <span className="text-lightmode-text-col1 dark:text-darkmode-text-col1">
              feel free to poke around.
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
