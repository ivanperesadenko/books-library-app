import {
  AnimationTriggerMetadata,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { fadeIn } from '@shared/animations/fade-in.animation';
import { fadeOut } from '@shared/animations/fade-out.animation';

export function createFadeAnimation(): AnimationTriggerMetadata {
  return trigger('fadeWithDelay', [
    transition(':enter', [useAnimation(fadeIn)]),
    transition(':leave', [useAnimation(fadeOut)]),
  ]);
}
