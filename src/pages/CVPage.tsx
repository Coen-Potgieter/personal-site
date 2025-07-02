type CVPageType = {};
const CVPage: React.FC<CVPageType> = () => {
  return (
    <div className="w-full md:ml-30 dark:invert dark:hue-rotate-180 ">
      <iframe
        className="w-full border-none"
        height={1600}
        src="https://coen-potgieter.github.io/CV/"
        title="My CV"
      />
    </div>
  );
};

export default CVPage;
