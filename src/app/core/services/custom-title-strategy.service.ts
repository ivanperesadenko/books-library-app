import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class CustomTitleStrategyService extends TitleStrategy {
  private applicationName = 'BooksLibrary';

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot) {
    const title: string | undefined = this.buildTitle(snapshot);
    const pageTitle: string = title
      ? `${this.applicationName} - ${title}`
      : this.applicationName;
    this.title.setTitle(pageTitle);
  }
}
