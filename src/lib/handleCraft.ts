import { encontrarCantidad, restarObjetos, handle } from './handleInv';

export function handleCraft(id: string, arr: any) {
	if (id === 'hacha_de_madera') {
		const v1 = encontrarCantidad(arr, 'tronco_de_roble_oscuro', 3);
		const v2 = encontrarCantidad(arr, 'tronco_de_roble', 2);
		if (v1 && v2) {
			restarObjetos(arr, 'tronco_de_roble_oscuro', 3);
			restarObjetos(arr, 'tronco_de_roble', 2);
			handle(arr, 'hacha_de_madera', 1);
		}
	}
	if (id === 'pico_de_madera') {
		const v1 = encontrarCantidad(arr, 'tronco_de_roble_oscuro', 3);
		const v2 = encontrarCantidad(arr, 'tronco_de_roble', 2);
		if (v1 && v2) {
			restarObjetos(arr, 'tronco_de_roble_oscuro', 3);
			restarObjetos(arr, 'tronco_de_roble', 2);
			handle(arr, 'pico_de_madera', 1);
		}
	}
	if (id === 'hacha_de_piedra') {
		const v1 = encontrarCantidad(arr, 'roca', 3);
		const v2 = encontrarCantidad(arr, 'tronco_de_roble', 2);
		if (v1 && v2) {
			restarObjetos(arr, 'roca', 3);
			restarObjetos(arr, 'tronco_de_roble', 2);
			handle(arr, 'hacha_de_piedra', 1);
		}
	}
	if (id === 'pico_de_piedra') {
		const v1 = encontrarCantidad(arr, 'roca', 3);
		const v2 = encontrarCantidad(arr, 'tronco_de_roble', 2);
		if (v1 && v2) {
			restarObjetos(arr, 'roca', 3);
			restarObjetos(arr, 'tronco_de_roble', 2);
			handle(arr, 'pico_de_piedra', 1);
		}
	}
	if (id === 'espada_de_piedra') {
		const v1 = encontrarCantidad(arr, 'roca', 2);
		const v2 = encontrarCantidad(arr, 'tronco_de_roble', 1);
		if (v1 && v2) {
			restarObjetos(arr, 'roca', 2);
			restarObjetos(arr, 'tronco_de_roble', 1);
			handle(arr, 'espada_de_piedra', 1);
		}
	}
}
