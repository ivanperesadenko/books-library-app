import { animate, animation, style } from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0, transform: 'translateY(50px)' }),
  animate(
    '100ms {{fadeInDelay}}ms ease-out',
    style({ opacity: 1, transform: 'translateY(0)' })
  ),
]);
