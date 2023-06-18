import { rand, handle } from './handleInv';

export function randRock(arr: any) {
  const randy = rand();
  if (randy >= 1 && randy <= 10) {
		handle(arr, 'roca', 1);
		return 'roca';
  }
}

export function randHunt(arr: any) {
  const randy = rand();
  if (randy >= 1 && randy <= 3) {
		handle(arr, 'huevo_de_gallina', 1);
		return 'huevo_de_gallina';
  }
  if (randy >= 4 && randy <= 5) {
		handle(arr, 'chuleta_de_cerdo', 1);
		return 'chuleta_de_cerdo';
  }
  if (randy >= 6 && randy <= 7) {
		handle(arr, 'filete_de_vaca', 1);
		return 'filete_de_vaca';
  }
  if (randy >= 8 && randy <= 10) {
		return 'barrera';
	}
}
