export const THEMES = {
  about: 'theme-about',
  blog: 'theme-blog',
  contact: 'theme-contact',
  projects: 'theme-projects',
  home: 'theme-home',
};

export const BACKGROUNDS = {
  about: 'about-bg',
  blog: 'blog-bg',
  contact: 'contact-bg',
  projects: 'projects-bg',
  home: 'home-bg',
};

export const BLOG_SORT_LIST = ['date', 'views'];

export const MAX_WIDTH = 1536;

export const FADE_IN_FIRST = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
  transition: {
    duration: 0.5,
  },
};

export const FADE_IN_SECOND = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
  transition: {
    duration: 0.3,
    delay: 0.25,
  },
};

export const FADE_IN_X = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
  transition: {
    duration: 0.25,
    delay: 0.4,
  },
};

export const FADE_IN_X_REVERSE = {
  initial: { x: -200, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    delay: 0.25,
    duration: 0.3,
  },
};

export const HOVER_SCALE = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.96 },
  whileFocus: { scale: 1.03 },
};

export const FADE_IN_VIEW = {
  initial: { y: '40px', opacity: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
};
