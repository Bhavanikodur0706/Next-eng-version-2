const options1 = {
      
    particles: {
        color:"#e38724",
      links: {
        enable: true, // this enables links between particles
        opacity: 0.1,
        distance: 200,
        color: "#e38724",
      },
      move: {
        enable: true, // this makes particles move
        speed: { min: 1, max: 3 }, // this is the speed of the particles
      },
      opacity: {
        value: { min: 0, max: 0.2 }, // this sets the opacity of the particles
      },
      size: {
        value: { min: 1, max: 3 }, // this sets the size of the particles
      },
    },
    interactivity: {
      events: {
        onClick: {
          // this handles the mouse click event
          enable: true,
          mode: "push", // this adds particles
        },
        onHover: {
          // this handles the mouse hover event
          enable: true,
          mode: "grab", // this make particles move away from the mouse
        },
      },
  }
};


  // Configuration for the second particle instance
  const options2 = {
    particles: {
        color:"#fff",
      links: {
        enable: true, // this enables links between particles
        opacity: 0.3,
        distance: 200,
        color: "#fff",
      },
      move: {
        enable: true, // this makes particles move
        speed: { min: 1, max: 3 }, // this is the speed of the particles
      },
      opacity: {
        value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
      },
      size: {
        value: { min: 1, max: 3 }, // this sets the size of the particles
      },
    },
    interactivity: {
      events: {
        onClick: {
          // this handles the mouse click event
          enable: true,
          mode: "push", // this adds particles
        },
        onHover: {
          // this handles the mouse hover event
          enable: true,
          mode: "grab", // this make particles move away from the mouse
        },
      },
  }
};
  

  // Load the first particle instance
  tsParticles.load("particles-1", options1);

  // Load the second particle instance
  tsParticles.load("particles-2", options2);