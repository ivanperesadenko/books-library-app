import {
  AnimationTriggerMetadata,
  transition,
  trigger,
  style,
  animate,
} from '@angular/animations';

export const createTopActionsAnimation = (): AnimationTriggerMetadata => {
  return trigger('actionShow', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-60px)' }),
      animate(100, style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      style({ opacity: 1, transform: 'translateY(0)' }),
      animate(100, style({ opacity: 0, transform: 'translateY(-60px)' })),
    ]),
  ]);
};
