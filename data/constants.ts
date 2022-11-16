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
