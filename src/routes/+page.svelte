<script lang="ts">
	import HeroSlideshow from '$lib/components/HeroSlideshow.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<HeroSlideshow data={data.hero_images} />
