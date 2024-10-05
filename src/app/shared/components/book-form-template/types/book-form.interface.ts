import { FormControl } from '@angular/forms';
import { Moment } from 'moment';

export interface BookFormInterface {
  id: FormControl<string>;
  title: FormControl<string>;
  authorName: FormControl<string>;
  releaseDate: FormControl<Moment>;
  description: FormControl<string | null>;
  imagePath: FormControl<string | null>;
}
