import {
  AnimationTriggerMetadata,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { fadeIn } from '@shared/animations/show-in.animation';
import { fadeOut } from '@shared/animations/hide-out.animation';

export function createBookAnimation(): AnimationTriggerMetadata {
  return trigger('bookAnimation', [
    transition(':enter', [useAnimation(fadeIn)]),
    transition(':leave', [useAnimation(fadeOut)]),
  ]);
}
