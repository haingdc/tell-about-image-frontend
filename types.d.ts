// Add DOM type declarations that might be missing in Deno's TypeScript configuration

interface File {
  readonly lastModified: number;
  readonly name: string;
  readonly size: number;
  readonly type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  slice(start?: number, end?: number, contentType?: string): File;
  text(): Promise<string>;
}

interface FileList {
  readonly length: number;
  item(index: number): File | null;
  [index: number]: File;
}
