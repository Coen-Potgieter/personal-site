import CV from "../assets/cv.pdf";

type CVPageProps = {};
const CVPage: React.FC<CVPageProps> = () => {
  return (
    <div className="w-full h-screen px-[2vw] md:pl-[15vw] md:pr-10 pt-[7vh] md:pt-[10vh] bg-my-white1 dark:bg-my-black1">
      <div className="flex justify-center md:justify-start mb-1">
        <a
          href={CV}
          download="Coen_Potgieter_CV.pdf"
          className="px-4 hover:underline py-2 text-lightmode-text-col1 dark:text-darkmode-text-col1 font-semibold !transition-none"
        >
          Download CV
        </a>
      </div>

      <div className="hidden md:block w-full h-11/12 border dark:invert dark:hue-rotate-180">
        <embed src={CV} type="application/pdf" className="w-full h-full" />
      </div>

      <p className="md:hidden text-center text-darkmode-text-col2">
        Tap the button above to open CV.
      </p>
    </div>
  );
};

export default CVPage;
