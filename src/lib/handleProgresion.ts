import type { des } from './tipos';

export function encontrarProgreso(arr1: des[], id: string) {
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (element.id === id && element.disponible) {
      return true;
    } else {
      return false;
    }
  }
}