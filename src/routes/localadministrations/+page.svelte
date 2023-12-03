<script lang="ts">
	import LocalAdministrations from '$lib/components/LocalAdministrations.svelte';
	export let data;
</script>

<LocalAdministrations data={data.localadministration} />
