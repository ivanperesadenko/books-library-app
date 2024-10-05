import { Book } from '@shared/types';

export const initialBooks: Book[] = [
  {
    id: '1',
    title:
      'JavaScript: The Definitive Guide (7th Edition) Super important future book',
    authorName: 'David Flanagan',
    releaseDate: '2020-05-05',
    description:
      'A comprehensive guide covering the fundamentals and advanced features of JavaScript. It delves into ECMAScript 6 and HTML5, making it an essential resource for both beginners and experienced developers.',
    imagePath: 'assets/images/books/javascript-the-definite-guide-7th.jpg',
  },
  {
    id: '2',
    title: 'Eloquent JavaScript',
    authorName: 'Marijn Haverbeke',
    releaseDate: '2018-12-05',
    description:
      'This book provides a strong introduction to programming with JavaScript, focusing on writing efficient and clean code. It covers basic syntax, data structures, error handling, and asynchronous programming, with exercises to deepen understanding.',
    // imagePath: 'assets/images/books/eloquent-javascript.jpg',
    imagePath: null,
  },
  {
    id: '3',
    title: 'JavaScript: The Good Parts',
    authorName: 'Douglas Crockford',
    releaseDate: '2008-05-05',
    description:
      'This book focuses on the most powerful features of JavaScript, ignoring the parts of the language that are less useful or problematic. It helps developers create cleaner, more reliable code by using the "good parts" of JavaScript.',
    imagePath: 'assets/images/books/javascript-the-good-parts.jpg',
  },
  {
    id: '4',
    title: 'Secrets of the JavaScript Ninja',
    authorName: 'John Resig and Bear Bibeault',
    releaseDate: '2016-10-05',
    description:
      'This book explores advanced JavaScript techniques such as closures, prototypes, and event-driven development. It also provides insights into working with modern JavaScript APIs and the DOM.',
    imagePath: 'assets/images/books/secrets-of-the-javascript-ninja.png',
  },
  {
    id: '5',
    title: 'Head First JavaScript Programming',
    authorName: 'Eric Freeman and Elisabeth Robson\n',
    releaseDate: '2014-04-05',
    description:
      'A brain-friendly, hands-on guide to learning JavaScript. This book covers the basics and intermediate concepts of JavaScript programming, using a fun and engaging approach that incorporates puzzles, visuals, and interactive examples.',
    imagePath: 'assets/images/books/head-first-javascript-programming.jpg',
  },
];
