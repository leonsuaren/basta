import anime from 'animejs';

export const basicAnimationComponent = (element) => {
  anime({
    targets: `${element}`,
    opacity: 1,
    duration: 10000
  });
};