export const isTextTruncated = (element: HTMLElement) =>
  element.offsetWidth < element.scrollWidth ||
  element.offsetHeight < element.scrollHeight;
