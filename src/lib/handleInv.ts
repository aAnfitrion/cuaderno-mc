import type { inv } from './tipos';

function encontrarId(array: inv[], id: string) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element.id === id) {
			return true;
		}
	}
}

export function encontrarCantidad(array: inv[], id: string, cantidad: number) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element.id === id) {
			if (element.cantidad >= cantidad) {
				return true;
			}
		}
	}
}

function setObjetos(json: inv[], id: string, nuevaCantidad: number) {
	for (let i = 0; i < json.length; i++) {
		if (json[i].id === id) {
			json[i].cantidad = json[i].cantidad + nuevaCantidad;
			return;
		}
	}
}

export function restarObjetos(json: inv[], id: string, nuevaCantidad: number) {
	for (let i = 0; i < json.length; i++) {
		if (json[i].id === id) {
			json[i].cantidad = json[i].cantidad - nuevaCantidad;
			return;
		}
	}
}

export function handle(json: inv[], id: string, nuevaCantidad: number) {
	if (encontrarId(json, id) != true) {
		json.push({ id: id, cantidad: 1 });
	} else {
		setObjetos(json, id, nuevaCantidad);
	}
}

export function rand() {
	const randi = Math.floor(Math.random() * 10) + 1;
	return randi;
}
