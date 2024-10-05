import { Moment } from 'moment';

export interface BookFormValueInterface {
  id: string;
  title: string;
  authorName: string;
  releaseDate: Moment;
  description: string | null;
  imagePath: string | null;
}
