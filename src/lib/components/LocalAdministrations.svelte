<script lang="ts">
	export let data;
</script>

<header class="bg-red-800 text-white p-6">
	<h1 class="text-3xl">Local Administrations</h1>
</header>

<main class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
	{#each ['Boards', 'Commissions', 'Authorities'] as category}
		<div class="bg-white shadow overflow-hidden sm:rounded-lg p-6">
			<h2 class="text-lg leading-6 font-medium text-gray-900">{category}</h2>
			<div class="mt-5 space-y-2">
				{#if category === 'Boards'}
					{#each Object.keys(data) as key}
						<a
							href={`/localadministrations/${key.replace(/\s+/g, '').toLowerCase()}`}
							class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded inline-block w-full text-center"
						>
							{key}
						</a>
					{/each}
				{:else}
					<a
						href={`/${category.replace(/\s+/g, '').toLowerCase()}`}
						class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded inline-block w-full text-center"
					>
						{category}
					</a>
				{/if}
			</div>
		</div>
	{/each}
</main>
