export class FileReaderService {
  static readFile(
    event: Event,
    onLoadCallback: (readerResult: string) => void
  ): void {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    const file: File | undefined = element.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onLoadCallback(reader.result as string);
    };

    reader.readAsDataURL(file);
  }
}
