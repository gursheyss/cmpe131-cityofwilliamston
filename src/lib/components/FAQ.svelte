<script lang="ts">
	export let data;
</script>

<header class="bg-red-800 text-white p-6">
	<h1 class="text-3xl">FAQ Page</h1>
</header>

<main class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
	{#each [...new Set(data.map((item) => item.category))].sort() as category}
		<div class="bg-white shadow overflow-hidden sm:rounded-lg p-6">
			<h2 class="text-lg leading-6 font-medium text-gray-900">{category}</h2>
			<div class="mt-5">
				{#each data.filter((item) => item.category === category) as faq}
					<div class="mt-4">
						<dt class="text-lg">
							<b>{faq.question}</b>
						</dt>
						<dd class="mt-2 text-base text-gray-500">
							{faq.answer}
						</dd>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</main>
