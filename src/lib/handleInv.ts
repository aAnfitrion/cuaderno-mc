function encontrarId(array: any, id: string) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element.id === id) {
			return true;
		}
	}
}

export function encontrarCantidad(array: any, id: string, cantidad: number) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element.id === id) {
			if (element.cantidad >= cantidad) {
				return true;
			}
		}
	}
}

function setObjetos(json: any, id: string, nuevaCantidad: number) {
	for (let i = 0; i < json.length; i++) {
		if (json[i].id === id) {
			json[i].cantidad = json[i].cantidad + nuevaCantidad;
			return;
		}
	}
}

export function restarObjetos(json: any, id: string, nuevaCantidad: number) {
	for (let i = 0; i < json.length; i++) {
		if (json[i].id === id) {
			json[i].cantidad = json[i].cantidad - nuevaCantidad;
			return;
		}
	}
}

export function handle(json: any, id: string, nuevaCantidad: number) {
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
