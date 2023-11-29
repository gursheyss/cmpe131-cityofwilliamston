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

<div class="flex flex-col sm:flex-row items-center md:pl-4">
	<div class="w-full sm:w-1/2 flex flex-col items-center mb-4 sm:mb-0">
		<div class="w-full h-[50vh] overflow-hidden rounded-lg shadow-lg">
			{#each [data[currentSlideItem]] as image (currentSlideItem)}
				<img
					class="w-full h-full object-cover"
					in:fly={{ x: 100, duration: 500 }}
					out:fly={{ x: -100, duration: 500 }}
					src={image.image_url}
					alt={image.alt_text}
				/>
			{/each}
		</div>
		<div class="flex justify-between w-full mt-4">
			<button
				class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				on:click={() => prevImage()}>←</button
			>
			<button
				class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				on:click={() => nextImage()}>→</button
			>
		</div>
	</div>
	<div class="flex flex-col items-center w-full sm:w-1/2">
		<h1 class="text-4xl font-bold mb-4 text-red-800">Welcome!</h1>
		<p class="text-center pr-4 text-gray-600">
			Our goal is to provide<br />
			information about our<br />
			community for residents<br />
			and visitors to learn about<br />
			who we are and what we can<br />
			provide.
		</p>
	</div>
</div>
