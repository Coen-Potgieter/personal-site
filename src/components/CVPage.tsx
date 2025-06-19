type CVPageType = {};
const CVPage: React.FC<CVPageType> = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full dark:invert dark:hue-rotate-180">
      <iframe
        className="w-full h-full border-none"
        src="https://coen-potgieter.github.io/CV/"
        title="My CV"
      />
    </div>
  );
};

export default CVPage;
