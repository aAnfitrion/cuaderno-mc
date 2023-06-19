import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const inventarioStore = writable(browser && (localStorage.getItem('inventario') || ""));

inventarioStore.subscribe((val) => browser && localStorage.setItem('inventario', val));
