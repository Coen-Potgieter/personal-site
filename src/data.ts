export const tagColours = new Map<string, string>([
  ["Python", "#306998"], // Slightly darker Python blue
  ["C++", "#00599C"], // Deep C++ blue (stays as the darker tone)
  ["SFML", "#8CC24A"], // Green—aligned with SFML’s fresh branding
  ["Pygame", "#FFD43B"], // Pythonic yellow
  ["TensorFlow", "#FF6F00"], // Signature TensorFlow orange
  ["React", "#8E44AD"], // Developer purple (fits devtools, frontend)
  ["NLP", "#3498DB"], // Light tech blue (suggests cloud/data/lang)
]);

export const aboutMe = {
  small:
    "I Am A Final Year Data Engineering Student At Stellenbosch University Looking For A Job",
  big: "THIS IS LONG BIG TEXT",
};

export const availablePages = {
  PROJECTS: "projects",
  ABOUT: "about",
  CV: "cv",
};

export const PROJECT_DATA = [
  {
    title: "Word Embedding Playground",
    topicTags: ["C++", "React", "NLP"],
    description:
      "An interactive React web app for exploring the structure and logic of word embeddings using the GloVe dataset. Includes real-time vector arithmetic, similarity search, and PCA-based 3D visualization—all powered by precomputed data processed in C++.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/word-embeddings-playground/main/assets/demo/cos-sim.gif",
      "https://raw.githubusercontent.com/Coen-Potgieter/word-embeddings-playground/main/assets/demo/linguistic-arithmetic.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/word-embeddings-playground",
  },
  {
    title: "Latent Face Explorer",
    topicTags: ["Python", "TensorFlow", "Pygame"],
    description:
      "An interactive playground for exploring autoencoder-based face generation, featuring real-time manipulation of 80-dimensional latent variables and a drawing interface to visualize how the model interprets sketches.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/faces-VAE/main/assets/demo/drawing.gif",
      "https://raw.githubusercontent.com/Coen-Potgieter/faces-VAE/main/assets/demo/sliders.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/faces-VAE/tree/main",
  },

  {
    title: "ML Dots",
    topicTags: ["Python", "Pygame"],
    description:
      "A path finding algorithm that leverages the genetic algorithm to evolve optimal paths through 2D mazes, where populations of 'dots' with randomized movements are iteratively improved through selection, reproduction, and mutation.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/ml-dots/main/Assets/demo.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/ml-dots",
  },

  {
    title: "ML Flappy Bird",
    topicTags: ["Python", "Pygame"],
    description:
      "A self-learning Flappy Bird clone built in Python with Pygame, where a lightweight neural network controls the bird’s actions. Populations of networks are evolved using a genetic algorithm—through selection, crossover, and mutation—until they consistently achieve perfect, infinite-scoring gameplay without human input.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/ml-flappy-bird/main/Assets/demo.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/ml-flappy-bird/tree/main",
  },

  {
    title: "Boids",
    topicTags: ["C++", "SFML"],
    description:
      "An interactive simulation of flocking behavior (birds/fish) using the Boids algorithm, featuring real-time visualization with configurable parameters and predator avoidance mechanics.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/boids/master/assets/gifs/boids.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/boids/tree/master",
  },

  {
    title: "2D Gravity Simulator",
    topicTags: ["SFML", "C++"],
    description:
      "An interactive 2D simulator visualizing complex gravitational dynamics between celestial bodies, featuring multiple predefined orbital configurations and real-time parameter adjustments.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/three-body-orbits/main/assets/demo/broukeA3.gif",
      "https://raw.githubusercontent.com/Coen-Potgieter/three-body-orbits/main/assets/demo/broukeA7.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/three-body-orbits/tree/main",
  },
];
