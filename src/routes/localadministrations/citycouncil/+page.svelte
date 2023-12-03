<script lang="ts">
	export let data;
	data = data.localadministration;
	let firstKey = Object.entries(data)[1];
	let boardMembers = firstKey[1].board_members;
</script>

<div class="container mx-auto px-4 flex flex-col md:flex-row pb-96">
	<div class="my-4 p-4 bg-white shadow-md rounded-md md:w-1/2 w-full">
		<h2 class="text-2xl font-bold mb-2">{firstKey[0]}</h2>
		<p class="text-gray-700">{firstKey[1].description}</p>
	</div>
	<div
		class="my-4 p-4 bg-white shadow-md rounded-md md:w-1/2 w-full md:ml-4 flex flex-wrap justify-start"
	>
		<h2 class="text-2xl font-bold mb-2 w-full">Board Members</h2>
		{#each boardMembers as member}
			<div class="mb-4 flex flex-col items-center w-1/3">
				<img
					class="w-24 h-24 rounded-full mb-2"
					src={member.profile_picture_url || 'default-image-url'}
					alt={member.name}
				/>
				<div>
					<h3 class="text-xl font-bold">{member.name}</h3>
					<p class="text-red-700">{member.email}</p>
					<p class="text-gray-700">Term Expiration: {member.term_expiration}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
