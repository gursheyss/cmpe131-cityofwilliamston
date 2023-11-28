<script lang="ts">
	import HeroSlideshow from '$lib/components/HeroSlideshow.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col">
	<HeroSlideshow data={data.hero_images} />
</div>
