import { rand, handle, type inv, encontrarCantidad } from './handleInv';

export function randLog(array: inv[]) {
	const randy = rand();
	if (randy >= 1 && randy <= 60) {
		handle(array, 'tronco_de_roble', 1);
		return 'tronco_de_roble';
	} else {
		handle(array, 'tronco_de_roble_oscuro', 1);
		return 'tronco_de_roble_oscuro';
	}
}

export function randRock(array: inv[]) {
	const randy = rand();
	if (randy >= 1 && randy <= 60) {
		handle(array, 'roca', 1);
		return 'roca';
	} else {
		return 'barrera';
	}
}

export function randMeat(array: inv[]) {
	const randy = rand();
	if (randy > 0 && randy <=40) {
		handle(array, 'huevo_de_gallina', 1);
		return 'huevo_de_gallina';
	} else if (randy > 40 && randy <= 60) {
		handle(array, 'chuleta_de_cerdo', 1);
		return 'chuleta_de_cerdo';
	} else if (randy > 60 && randy <= 80) {
		handle(array, 'filete_de_vaca', 1);
		return 'filete_de_vaca';
	} else {
		return 'barrera';
	}
}

export function nivelDeHacha(leti: number, array: inv[]) {
	leti = 1200;
	if (encontrarCantidad(array, 'hacha_de_madera', 1)) {
		leti = 1000;
	}
	if (encontrarCantidad(array, 'hacha_de_piedra', 1)) {
		leti = 800;
	}
	return leti;
}

export function nivelDePico(leti: number, array: inv[]) {
	leti = 1200;
	if (encontrarCantidad(array, 'pico_de_piedra', 1)) {
		leti = 1000;
	}
	return leti;
}

export function nivelDeEspada(leti: number, array: inv[]) {
	leti = 5000;
	return leti;
}