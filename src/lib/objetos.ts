export interface detallesRecetaOrden {
	y1: string;
	y2: string;
	y3: string;
	y4: string;
	y5: string;
	y6: string;
	y7: string;
	y8: string;
	y9: string;
}

export interface detallesReceta {
	id: string;
	cantidad: number;
}

export interface detallesObjeto {
	id: string;
	nombre: string;
	rareza: number;
	valor: number;
	receta: detallesReceta[] | null;
	recetaOrden: detallesRecetaOrden[] | null;
}

export const objetos: detallesObjeto[] = [
	{
		id: 'tronco_de_roble',
		nombre: 'Tronco de roble',
		rareza: 1,
		valor: 1,
		receta: null,
		recetaOrden: null
	},
	{
		id: 'tronco_de_roble_oscuro',
		nombre: 'Tronco de roble oscuro',
		rareza: 1,
		valor: 1,
		receta: null,
		recetaOrden: null
	},
	{
		id: 'roca',
		nombre: 'Roca',
		rareza: 1,
		valor: 1,
		receta: null,
		recetaOrden: null
	},
	{
		id: 'hacha_de_madera',
		nombre: 'Hacha de madera',
		rareza: 1,
		valor: 5,
		recetaOrden: [
			{
				y1: '',
				y2: 'tronco_de_roble_oscuro',
				y3: 'tronco_de_roble_oscuro',
				y4: '',
				y5: 'tronco_de_roble',
				y6: 'tronco_de_roble_oscuro',
				y7: '',
				y8: 'tronco_de_roble',
				y9: ''
			}
		],
		receta: [
			{
				id: 'tronco_de_roble',
				cantidad: 2
			},
			{
				id: 'tronco_de_roble_oscuro',
				cantidad: 3
			}
		]
	},
	{
		id: 'pico_de_madera',
		nombre: 'Pico de madera',
		rareza: 1,
		valor: 5,
		receta: [
			{
				id: 'tronco_de_roble',
				cantidad: 2
			},
			{
				id: 'tronco_de_roble_oscuro',
				cantidad: 3
			}
		],
		recetaOrden: [
			{
				y1: 'tronco_de_roble_oscuro',
				y2: 'tronco_de_roble_oscuro',
				y3: 'tronco_de_roble_oscuro',
				y4: '',
				y5: 'tronco_de_roble',
				y6: '',
				y7: '',
				y8: 'tronco_de_roble',
				y9: ''
			}
		]
	},
	{
		id: 'hacha_de_piedra',
		nombre: 'Hacha de piedra',
		rareza: 1,
		valor: 8,
		receta: [
			{
				id: 'tronco_de_roble',
				cantidad: 2
			},
			{
				id: 'roca',
				cantidad: 3
			}
		],
		recetaOrden: [
			{
				y1: '',
				y2: 'roca',
				y3: 'roca',
				y4: '',
				y5: 'tronco_de_roble',
				y6: 'roca',
				y7: '',
				y8: 'tronco_de_roble',
				y9: ''
			}
		]
	},
	{
		id: 'pico_de_piedra',
		nombre: 'Pico de piedra',
		rareza: 1,
		valor: 8,
		receta: [
			{
				id: 'tronco_de_roble',
				cantidad: 2
			},
			{
				id: 'roca',
				cantidad: 3
			}
		],
		recetaOrden: [
			{
				y1: 'roca',
				y2: 'roca',
				y3: 'roca',
				y4: '',
				y5: 'tronco_de_roble',
				y6: '',
				y7: '',
				y8: 'tronco_de_roble',
				y9: ''
			}
		]
	},
	{
		id: 'espada_de_piedra',
		nombre: 'Espada de piedra',
		rareza: 1,
		valor: 7,
		receta: [
			{
				id: 'tronco_de_roble',
				cantidad: 1
			},
			{
				id: 'roca',
				cantidad: 2
			}
		],
		recetaOrden: [
			{
				y1: '',
				y2: 'roca',
				y3: '',
				y4: '',
				y5: 'roca',
				y6: '',
				y7: '',
				y8: 'tronco_de_roble',
				y9: ''
			}
		]
	},
	{
		id: 'huevo_de_gallina',
		nombre: 'Huevo de gallina',
		rareza: 2,
		valor: 4,
		recetaOrden: null,
		receta: null
	},
	{
		id: 'chuleta_de_cerdo',
		nombre: 'Chuleta de cerdo',
		rareza: 2,
		valor: 15,
		recetaOrden: null,
		receta: null
	},
	{
		id: 'filete_de_vaca',
		nombre: 'Filete de vaca',
		rareza: 2,
		valor: 16,
		recetaOrden: null,
		receta: null
	},
	{
		id: 'barrera',
		nombre: 'Barrera',
		rareza: 616,
		valor: 960192616,
		recetaOrden: null,
		receta: null
	}
];
