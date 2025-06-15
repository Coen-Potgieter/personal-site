import Tag from "./Tag";

const ProjectCard: React.FC = () => {
  const techStack: string[] = ["Python", "Tensorflow", "More Tech"];
  const description: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus id metus id dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ullamcorper mauris at lorem bibendum, ac tempor dolor pulvinar. Sed accumsan bibendum magna, nec hendrerit magna porta a. Vestibulum sit amet libero iaculis, varius sem et, consequat orci. Suspendisse consequat sagittis arcu, eu laoreet mauris elementum quis. Praesent pharetra venenatis rhoncus. Cras feugiat facilisis libero, nec elementum lacus sodales sollicitudin. Mauris pharetra dignissim arcu, ac auctor elit facilisis vitae. Ut sed lacinia nisl, rutrum malesuada ligula. Suspendisse vehicula placerat elit eleifend maximus. In quis pretium tortor. ";
  return (
    <div className="flex flex-col h-[50vh] w-10/12 bg-amber-400 rounded-2xl items-center shadow-lg">
      <div className="flex ">
        <div className="grid grid-rows-1 bg-green-500 w-full">
          {techStack.map((item, id) => {
            return <Tag tagName={item} key={id} />;
          })}
        </div>
        <h1 className="text-4xl py-5">Faces VAE</h1>
      </div>
      <div className="flex w-full justify-around">
        <img src="https://raw.githubusercontent.com/Coen-Potgieter/faces-VAE/main/assets/demo/drawing.gif" />
        <img src="https://raw.githubusercontent.com/Coen-Potgieter/faces-VAE/main/assets/demo/sliders.gif" />
      </div>
      <section className="w-full text-center">
        <p>description</p>
        <p className="text-base/tight">{description}</p>
      </section>
    </div>
  );
};

export default ProjectCard;
