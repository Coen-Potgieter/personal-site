import GitHubSVG from "../assets/svg/GitHubSVG";
import LinkedInSVG from "../assets/svg/LinkedInSVG";
import GoodReadsSVG from "../assets/svg/GoodReadsSVG";
import { handleProfileClick } from "../lib/helper-funcs";

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="flex flex-col md:flex-row pt-[10vh] pl-[5vw] h-screen w-screen font-tinos">
      {/* Left Half Div */}
      <div className="md:w-[50vw] w-screen">
        {/* Name, Position, sub-thing */}
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
        {/* Name, Position, sub-thing */}
        <div className="flex flex-row text-lightmode-text-col2 gap-x-4 dark:text-darkmode-text-col2 py-5 md:pl-10 md:pt-0">
          <button
            onClick={() => handleProfileClick("github")}
            className="cursor-pointer transition-all duration-100 ease-in-out dark:hover:text-darkmode-text-col1 hover:text-lightmode-text-col1"
          >
            <GitHubSVG size={25} />
          </button>
          <button
            onClick={() => handleProfileClick("linkedin")}
            className="cursor-pointer transition-all duration-100 ease-in-out dark:hover:text-darkmode-text-col1 hover:text-lightmode-text-col1"
          >
            <LinkedInSVG size={25} />
          </button>
          <button
            onClick={() => handleProfileClick("goodreads")}
            className="cursor-pointer transition-all duration-100 ease-in-out dark:hover:text-darkmode-text-col1 hover:text-lightmode-text-col1"
          >
            <GoodReadsSVG size={25} />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex flex-col w-screen md:w-[50vw] overflow-y-scroll pr-10 mt-5 scrollbar-hidden">
        {/* About Me */}
        <h1 className="text-4xl font-bold text-lightmode-text-col1 dark:text-darkmode-text-col1">
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
