export const handleProfileClick = (platform: string) => {
  if (platform === "github") {
    window.open(
      "https://github.com/Coen-Potgieter",
      "_blank",
      "noopener,noreferrer",
    );
  } else if (platform === "linkedin") {
    window.open(
      "https://www.linkedin.com/in/coen-potgieter/",
      "_blank",
      "noopener,noreferrer",
    );
  } else if (platform === "goodreads") {
    window.open(
      "https://www.goodreads.com/user/show/143235647-coen-potgieter",
      "_blank",
      "noopener,noreferrer",
    );
  }
};
