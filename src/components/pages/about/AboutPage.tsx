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
          <PageNavButton label="ABOUT" isActive={true} />
          <PageNavButton label="PROJECTS" isActive={false} />
          <PageNavButton label="LOG" isActive={false} />
        </div>
        <div className="flex flex-col pl-10 text-my-light-text1">
          <GitHubSVG size={30} />
        </div>
      </div>

      <div className="flex flex-col w-[50vw] overflow-y-scroll pr-10">
        <h1 className="text-4xl text-my-light-text1">About</h1>
        <p className="text-lg text-my-light-text2">
          I'm a final-year Data Engineering student with a curiosity that's
          gotten me tangled in everything from neural networks built from
          scratch to visual simulations of gravitational chaos.
        </p>
        <p className="text-lg text-my-light-text2">
          I absolutely love building things in code that teaches me new, complex
          topics. This may include an MLP built from scratch using nothing but
          numpy, a self playing Flappy Bird, a React application for playing
          with word embeddings or a simulation of chaotic 3 body systems, I
          become obsessed and strive to become an expert in that topic.
        </p>
        <p className="text-lg text-my-light-text2">
          Aside from coding I love reading, listening to music and enjoy playing
          chess from time to time. Right now, I’m completing my degree while
          cautiously engaging in my own personal projects and interests. My core
          strengths live somewhere between code, data, and explanation — and I
          enjoy working across that spectrum.
        </p>
        <p className="text-lg text-my-light-text2">
          This site is mostly a place to log what I’ve built, what I’ve been
          reading or listening to, and things I’ve learned along the way. It’s
          not a pitch, but rather my virtual garden. With that said, if you’re
          looking for someone who’s passionate about their craft and has range
          then have a look around.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
