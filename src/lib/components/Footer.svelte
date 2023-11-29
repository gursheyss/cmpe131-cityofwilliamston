<script lang="ts">
	export let data;
</script>

<footer class="flex flex-col items-center p-6 bg-white z-50">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full">
		{#each data as item (item.id)}
			<div class="md:col-span-1 lg:col-span-1">
				<h3 class="text-lg font-semibold mt-2">{item.name}</h3>
				{#if item.details.address}
					<p>{item.details.address}</p>
				{/if}
				{#if item.details.contact_number}
					<p>Contact: {item.details.contact_number}</p>
				{/if}
				{#if item.details.fax}
					<p>Fax: {item.details.fax}</p>
				{/if}
				{#if item.details.office_hours}
					<p>Office Hours: {item.details.office_hours}</p>
				{/if}
				{#if item.details.email}
					<p>Email: {item.details.email}</p>
				{/if}
				{#if item.details.inspection_request_line}
					<p>Inspection Request Line: {item.details.inspection_request_line}</p>
				{/if}
			</div>
		{/each}
		<div class="text-right">
			<h2 class="text-red-700 uppercase">If you have an emergency please dial 911</h2>
			<p>Contact city hall for commercial opportunities</p>
			<p class="underline">Inspection scheduling instructions</p>
			<h2 class="text-xl font-bold mt-4">Discover the charm!</h2>
		</div>
	</div>
</footer>
