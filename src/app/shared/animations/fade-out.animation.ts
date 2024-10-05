import { animate, animation, style } from '@angular/animations';

export const fadeOut = animation([
  style({ opacity: 1, transform: 'translateY(0)' }),
  animate(
    '100ms {{fadeOutDelay}}ms ease-out',
    style({ opacity: 0, transform: 'translateY(50px)' })
  ),
]);
