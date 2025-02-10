<script>
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<Sidebar />
{@render children()}
<Footer />