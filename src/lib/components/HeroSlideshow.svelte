<script lang="ts">
	import { fly } from 'svelte/transition';

	export let data;

	let currentSlideItem = 0;
	const nextImage = () => {
		currentSlideItem = (currentSlideItem + 1) % data.length;
	};
	const prevImage = () => {
		if (currentSlideItem != 0) {
			currentSlideItem = (currentSlideItem - 1) % data.length;
		} else {
			currentSlideItem = data.length - 1;
		}
	};
</script>

<div class="relative h-screen flex flex-col pl-4">
	<div class="flex-grow relative">
		{#each [data[currentSlideItem]] as image (currentSlideItem)}
			<img
				class="absolute z-10 w-1/2 h-1/2 object-cover"
				in:fly={{ x: 100, duration: 1000 }}
				out:fly={{ x: -100, duration: 1000 }}
				src={image.image_url}
				alt={image.alt_text}
			/>
		{/each}
		<div class="absolute top-1/2 left-0 ml-4">
			<button class="btn" on:click={() => prevImage()}>←</button>
		</div>
		<div class="absolute top-1/2 right-1/2 mr-4">
			<button class="btn" on:click={() => nextImage()}>→</button>
		</div>
	</div>
</div>
