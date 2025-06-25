export const tagColours = new Map<string, string>([
  ["Python", "#FFD43B"], // Official Python Yellow
  ["C++", "#00599C"], // Deep C++ Blue
  ["SFML", "#8CC24A"], // Bright Green (SFML)
  ["TensorFlow", "#FF6F00"], // TensorFlow Orange
  ["React", "#8E44AD"], // Developer Purple
  ["NLP", "#3498DB"], // Light Tech Blue
  ["Simulation", "#D35400"], // Burnt Orange (dynamism, motion)
  ["Theory", "#2C3E50"], // Dark Slate (depth, abstraction)
  ["Data Viz", "#1ABC9C"], // Aqua/Teal (clarity, charts)
  ["Genetic Algo", "#C0392B"], // Deep Red (evolution, mutation)
  ["Autoencoders", "#9B59B6"], // Violet (latent space, compression)
]);

export const monthlyMusic = {
  2025: {
    june: [{ artist: "Little Simz", album: "Lotus" }],
  },
  2024: {
    june: [{ artist: "Little Simz", album: "Lotus" }],
  },
};

export const aboutMe = {
  small:
    "I Am A Final Year Data Engineering Student At Stellenbosch University Looking For A Job",
  big: "THIS IS LONG BIG TEXT",
};

export const availablePages = {
  PROJECTS: "projects",
  ABOUT: "about",
  CV: "cv",
  LOG: "log",
  MOBILE_MODAL: "mobile modal",
};

export const PROJECT_DATA = [
  {
    title: "Word Embedding Playground",
    topicTags: ["C++", "React", "NLP", "Data Viz", "Theory"],
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
    topicTags: ["Python", "TensorFlow", "Autoencoders", "Theory"],
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
    topicTags: ["Python", "Genetic Algo", "Simulation"],
    description:
      "A path finding algorithm that leverages the genetic algorithm to evolve optimal paths through 2D mazes, where populations of 'dots' with randomized movements are iteratively improved through selection, reproduction, and mutation.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/ml-dots/main/Assets/demo.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/ml-dots",
  },

  {
    title: "ML Flappy Bird",
    topicTags: ["Python", "Genetic Algo"],
    description:
      "A self-learning Flappy Bird clone built in Python with Pygame, where a lightweight neural network controls the bird’s actions. Populations of networks are evolved using a genetic algorithm—through selection, crossover, and mutation—until they consistently achieve perfect, infinite-scoring gameplay without human input.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/ml-flappy-bird/main/Assets/demo.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/ml-flappy-bird/tree/main",
  },
  {
    title: "Visualising Neural Networks Learn",
    topicTags: ["Python", "Data Viz", "Theory"],
    description:
      'Built from scratch with NumPy, this project visually demonstrates how neural networks approximate unknown functions—capturing their "learning" process in real time. Through 2D/3D visualizations and configurable hyperparameters (like learning rate, sample size, and architecture), it reveals insights into model convergence, granularity, and expressiveness. Includes a stunning neural network image reconstructor.',
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/visualising-neural-networks/main/Assets/demo/sum-of-sins-low-lr.gif",
      "https://raw.githubusercontent.com/Coen-Potgieter/visualising-neural-networks/main/Assets/demo/parabola-3d.gif",
    ],
    gitHubLink:
      "https://github.com/Coen-Potgieter/visualising-neural-networks/tree/main",
  },

  {
    title: "Boids",
    topicTags: ["C++", "SFML", "Simulation", "Theory"],
    description:
      "An interactive simulation of flocking behavior (birds/fish) using the Boids algorithm, featuring real-time visualization with configurable parameters and predator avoidance mechanics.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/boids/master/assets/gifs/boids.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/boids/tree/master",
  },

  {
    title: "2D Gravity Simulator",
    topicTags: ["SFML", "C++", "Simulation"],

    description:
      "An interactive 2D simulator visualizing complex gravitational dynamics between celestial bodies, featuring multiple predefined orbital configurations and real-time parameter adjustments.",
    demoVids: [
      "https://raw.githubusercontent.com/Coen-Potgieter/three-body-orbits/main/assets/demo/broukeA3.gif",
      "https://raw.githubusercontent.com/Coen-Potgieter/three-body-orbits/main/assets/demo/broukeA7.gif",
    ],
    gitHubLink: "https://github.com/Coen-Potgieter/three-body-orbits/tree/main",
  },
];
