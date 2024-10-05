import { Book } from '@shared/types';
import { BookFormValueInterface } from '@shared/components/book-form-template/types/book-form-value.interface';

export class BookModel implements Book {
  id: string;
  title: string;
  authorName: string;
  releaseDate: string;
  description: string | null;
  imagePath: string | null;

  constructor(form: BookFormValueInterface) {
    const { id, title, releaseDate, imagePath, description, authorName } = form;
    this.id = id;
    this.title = title;
    this.authorName = authorName;
    this.releaseDate = releaseDate.format();
    this.description = description;
    this.imagePath = imagePath;
  }
}
