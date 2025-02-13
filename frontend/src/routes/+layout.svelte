<script>
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<Sidebar />
{@render children()}
{#if $page.url.pathname !== '/'}
	<Footer />
{/if}