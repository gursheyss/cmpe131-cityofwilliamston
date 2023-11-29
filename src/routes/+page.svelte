<script lang="ts">
	import HeroSlideshow from '$lib/components/HeroSlideshow.svelte';
	import UpcomingEvents from '$lib/components/UpcomingEvents.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col">
	<HeroSlideshow data={data.hero_images} />
	<UpcomingEvents data={data.upcoming_events} />
</div>
