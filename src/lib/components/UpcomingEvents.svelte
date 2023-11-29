<script lang="ts">
	export let data;
</script>

<div class="p-4">
	<h2 class="text-4xl font-bold mb-4">Upcoming events</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each data as event (event.id)}
			<div class="rounded overflow-hidden shadow-lg">
				<img class="w-full h-64 object-cover" src={event.image_url} alt={event.title} />
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{event.title}</div>
					<p class="text-gray-700 text-base">{event.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
