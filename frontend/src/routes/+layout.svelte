<script>
	import '../app.css';
	import Nav from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<!-- <Nav /> -->
{@render children()}
<Footer />