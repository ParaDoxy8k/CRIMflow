<script>
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import {isOverlayOpen} from '../stores/Overlay.js';
	import Overlay from '$lib/components/Overlay.svelte';
	import ProfileMenu from '$lib/components/ProfileMenu.svelte';

	let { children } = $props();
</script>

<Sidebar />
{#if $page.url.pathname !== '/'}
	<ProfileMenu />
{/if}
{#if $isOverlayOpen }
	<Overlay />
{/if}

{@render children()}
{#if $page.url.pathname !== '/'}
	<Footer />
{/if}