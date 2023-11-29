<script lang="ts">
	import Logo from '$lib/assets/Logo.png';
</script>

<header class="top-0 left-0 right-0 flex flex-col items-center p-6 bg-white z-50">
	<div class="flex items-center mb-2">
		<h1 class="text-3xl font-bold mr-4 text-red-700">City of Williamston, Michigan</h1>
		<img src={Logo} class="h-12" />
	</div>
	<nav>
		<ul class="flex space-x-4">
			<li><a href="#" class="hover:underline text-blue-500">Local administrations</a></li>
			<li><a href="#" class="hover:underline text-blue-500">City departments</a></li>
			<li><a href="#" class="hover:underline text-blue-500">About Williamston</a></li>
			<li><a href="#" class="hover:underline text-blue-500">Documents and Forms</a></li>
			<li><a href="/faq" class="hover:underline text-blue-500">FAQ</a></li>
		</ul>
	</nav>
</header>
