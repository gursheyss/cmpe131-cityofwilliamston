<script lang="ts">
	import Logo from '$lib/assets/Logo.png';
</script>

<header class="flex flex-col items-center p-6 bg-white">
	<div class="flex items-center mb-4">
		<h1 class="text-3xl font-bold mr-4 text-red-700">City of Williamston, Michigan</h1>
		<img src={Logo} class="h-12" />
	</div>
	<nav>
		<ul class="flex space-x-4">
			<li><a href="#" class="hover:underline text-blue-500">Local administrations</a></li>
			<li><a href="#" class="hover:underline text-blue-500">City departments</a></li>
			<li><a href="#" class="hover:underline text-blue-500">About Williamston</a></li>
			<li><a href="#" class="hover:underline text-blue-500">Documents and Forms</a></li>
			<li><a href="#" class="hover:underline text-blue-500">FAQ</a></li>
		</ul>
	</nav>
</header>
