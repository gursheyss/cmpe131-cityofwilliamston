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

<div class="relative h-screen flex pl-4">
	<div class="w-1/2 relative">
		{#each [data[currentSlideItem]] as image (currentSlideItem)}
			<img
				class="absolute z-10 w-full h-1/2 object-cover"
				in:fly={{ x: 100, duration: 1000 }}
				out:fly={{ x: -100, duration: 1000 }}
				src={image.image_url}
				alt={image.alt_text}
			/>
		{/each}
		<div class="absolute top-1/2 left-0 ml-4">
			<button class="btn" on:click={() => prevImage()}>←</button>
		</div>
		<div class="absolute top-1/2 right-0 mr-4">
			<button class="btn" on:click={() => nextImage()}>→</button>
		</div>
	</div>
	<div class="flex flex-col items-center pt-16 w-1/2">
		<h1 class="text-4xl font-bold mb-4">Welcome!</h1>
		<p class="text-center pr-4">
			Our goal is to provide<br />
			information about our<br />
			community for residents<br />
			and visitors to learn about<br />
			who we are and what we can<br />
			provide.
		</p>
	</div>
</div>
