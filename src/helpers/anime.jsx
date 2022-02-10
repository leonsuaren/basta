import anime from 'animejs';

export const basicAnimationComponent = (element) => {
  anime({
    targets: `${element}`,
    opacity: 1,
    duration: 5000
  });
};

export const reverseBasicAnimationComponent = (element) => {
  anime({
    targets: `${element}`,
    opacity: 0,
    duration: 10000
  });
}