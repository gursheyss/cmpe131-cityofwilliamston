<script lang="ts">
	import Logo from '$lib/assets/Logo.png';

	function printPage() {
		window.print();
	}
</script>

<header class="top-0 left-0 right-0 flex flex-col items-center p-6 bg-white z-50">
	<div class="flex flex-col md:flex-row items-center mb-2">
		<h1 class="text-3xl font-bold mr-4 text-red-700 text-center">City of Williamston, Michigan</h1>
		<img src={Logo} alt="city of williamston" class="h-12 mb-4 md:mb-0" />
	</div>
	<nav>
		<ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
			<li>
				<a href="/localadministrations" class="hover:underline text-gray-600 text-lg font-bold"
					>Local administrations</a
				>
			</li>
			<li>
				<a href="#" class="hover:underline text-gray-600 text-lg font-bold">City departments</a>
			</li>
			<li>
				<a href="#" class="hover:underline text-gray-600 text-lg font-bold">About Williamston</a>
			</li>
			<li>
				<a href="#" class="hover:underline text-gray-600 text-lg font-bold">Documents and Forms</a>
			</li>
			<li><a href="/faq" class="hover:underline text-gray-600 text-lg font-bold">FAQ</a></li>
			<li>
				<button on:click={printPage} class="hover:underline text-gray-600 text-lg font-bold"
					>Print as PDF</button
				>
			</li>
		</ul>
	</nav>
</header>
