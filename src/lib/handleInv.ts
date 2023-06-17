function encontrarId(array: any, id: string) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element.id === id) {
			return true;
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

export function handle(json: any, id: string, nuevaCantidad: number) {
	if (encontrarId(json, 'tronco_de_roble') != true) {
		json.push({ id: 'tronco_de_roble', cantidad: 1 });
	} else {
		setObjetos(json, 'tronco_de_roble', nuevaCantidad);
	}
}
