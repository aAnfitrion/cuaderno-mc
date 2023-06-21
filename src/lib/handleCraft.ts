import { encontrarCantidad, restarObjetos, handle, type inv } from './handleInv';
import type { detallesObjeto } from './objetos';

export function handleCraft(id: string, arr1: inv[], arr2: detallesObjeto[]) {
	for (let i = 0; i < arr2.length; i++) {
		const objetos = arr2[i];
		if (objetos.id === id && objetos.receta) {
			let si = false;
			for (let i = 0; i < objetos.receta.length; i++) {
				const ingrediente = objetos.receta[i];
				const encontrar = encontrarCantidad(arr1, ingrediente.id, ingrediente.cantidad);
				if (encontrar) {
					si = true;
				} else {
					si = false;
				}
			}
			if (si) {
				for (let i = 0; i < objetos.receta.length; i++) {
					const ingrediente = objetos.receta[i];
					restarObjetos(arr1, ingrediente.id, ingrediente.cantidad);
				}
				handle(arr1, objetos.id, 1);
				return true;
			} else {
				return false;
			}
		}
	}
}
