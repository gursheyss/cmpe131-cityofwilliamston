<script lang="ts">
</script>

<header class="bg-red-800 text-white p-6">
	<h1 class="text-3xl">Local Administrations</h1>
</header>

<main class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
	{#each ['Boards', 'Commissions', 'Authorities'] as category}
		<div class="bg-white shadow overflow-hidden sm:rounded-lg p-6">
			<h2 class="text-lg leading-6 font-medium text-gray-900">{category}</h2>
			<div class="mt-5">
				<button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
					{category}
				</button>
			</div>
		</div>
	{/each}
</main>
