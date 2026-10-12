// next/image sem otimização e <img> não aplicam o basePath sozinhos.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function caminho(path: string): string {
  return `${BASE_PATH}${path}`;
}
