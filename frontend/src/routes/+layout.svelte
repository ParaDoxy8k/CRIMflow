<script>
	import '../app.css';
	import Sidebar from '$lib/components/common/Sidebar.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import { page } from '$app/stores';
	import {isOverlayOpen} from '../stores/Overlay.js';
	import Overlay from '$lib/components/Overlay.svelte';

	let { children } = $props();
</script>

<Sidebar />
{#if $isOverlayOpen }
	<Overlay />
{/if}

{@render children()}
{#if $page.url.pathname !== '/'}
	<Footer />
{/if}