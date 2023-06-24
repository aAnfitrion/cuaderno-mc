export interface inv {
	id: string;
	cantidad: number;
}

export function rand() {
	const randi = Math.floor(Math.random() * 100) + 1;
	return randi;
}

export function encontrarId(array: inv[], id: string) {
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

export function setObjetos(array: inv[], id: string, nuevaCantidad: number) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].id === id) {
			array[i].cantidad = array[i].cantidad + nuevaCantidad;
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

export function handle(array: inv[], id: string, nuevaCantidad: number) {
	if (encontrarId(array, id) != true) {
		array.push({ id: id, cantidad: 1 });
	} else {
		setObjetos(array, id, nuevaCantidad);
	}
}
