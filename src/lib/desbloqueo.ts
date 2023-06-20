import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const desbloqueoStore = writable(browser && (localStorage.getItem('desbloqueo') || ''));

desbloqueoStore.subscribe((val) => browser && localStorage.setItem('desbloqueo', val));
