<script>
	import '$lib/app.css';
	
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
</script>
<div class="bg-base-200">
<Navbar/>

<slot />

<Footer/>

</div>