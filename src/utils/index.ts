// it full slide from left
export const leftAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "-100%", // Slide in from the left
  },
  visible: {
    opacity: 1,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from right
export const rightAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "100%", // Slide in from the right
  },
  visible: {
    opacity: 1.5,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from top
export const topAsideVariants = {
  hidden: {
    opacity: 0,
    translateY: "-100%", // Slide in from the top
  },
  visible: {
    opacity: 1,
    translateY: "0%", // Slide to the center
    transition: {
      duration: 1, // Animation duration
      ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from button
export const bottomAsideVariants = {
  hidden: {
    opacity: 0,
    translateY: "100%", // Slide in from the bottom
  },
  visible: {
    opacity: 1,
    translateY: "0%", // Slide to the center
    transition: {
      duration: 1, // Animation duration
      ease: "easeInOut", // Easing function
    },
  },
};

// rotating the element
export const blobVariants = {
  hidden: {
    scale: 0,
    rotate: 0,
  },
  visible: {
    scale: 1,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

//sudden come and stop and x-y move
export const trailVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
    },
  },
};

//it comes from button some distance smoothly
export const scrollRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const scrollRevealLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const scrollRevealRightVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

//it show just like fade in
export const staggeredFadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.3,
      delayChildren: 0.3, // Adds a delay between children
      staggerChildren: 0.2, // Stagger effect
    },
  },
};

// it rotate 90 degree
export const rotateVariants = {
  hidden: {
    rotate: -90, // Rotate by -45 degrees
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
};

// scale up variant 0 to 1
export const scaleUpVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
};

//it start from one point w-0 to w-full (use for image)
export const splitVariants = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

//it start from middle and take full width
export const splitFromMiddleVariants = {
  hidden: {
    scaleX: 0, // Start with no width (hidden)
    originX: 0.5, // Set the transform origin to the middle horizontally
  },
  visible: {
    scaleX: 1, // Scale to full width
    originX: 0.5, // Keep the transform origin in the middle horizontally
    transition: {
      duration: 1.4, // Animation duration
      ease: "easeInOut", // Easing function
    },
  },
};

export const bounceVariants = {
  hidden: {
    y: -50, // Move up by 50 pixels
  },
  visible: {
    y: 0,
    transition: {
      type: "spring", // Spring animation
      damping: 2, // Controls bounciness
      stiffness: 100, // Controls how tight the spring is
    },
  },
};

// its a zooming effect 0.5 to 1
export const pulseVariants = {
  hidden: {
    scale: 0.5,
  },
  visible: {
    scale: 1,
    transition: {
      yoyo: Infinity, // Repeats indefinitely
      duration: 2,
    },
  },
};

// it look like it text and typed
export const typingVariants = {
  hidden: { width: "0" },
  visible: {
    width: "100%",
    transition: {
      delayChildren: 0.1, // Delay each letter
      staggerChildren: 0.05, // Delay between each letter
    },
  },
};

// Define a variant for each letter
export const letterVariants = {
  hidden: { opacity: 0, x: -10 }, // Move each letter slightly to the left
  visible: { opacity: 1, x: 0 },
};
