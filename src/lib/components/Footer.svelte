<script lang="ts">
	export let data;
</script>

<footer class="bg-gray-300 text- p-4">
	<div
		class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center"
	>
		<div class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 items-center md:items-start">
			<div>
				<h3 class="text-xl font-semibold">📍{data.department.name}</h3>
				<p>
					{data.department.address}, {data.department.city}, {data.department.state}
					{data.department.zip_code}
				</p>
				<p>Office Hours: {data.department.office_hours}</p>
				<p class="underline cursor-pointer">Directions to City Hall</p>
			</div>
		</div>
		<div class="flex flex-col">
			<h3 class="text-xl font-semibold">📞 Contact Us</h3>
			<p>Phone: {data.contact.phone}</p>
			<p>Fax: {data.contact.fax}</p>
			<p>Email: <a href="mailto:{data.contact.email}" class="underline">{data.contact.email}</a></p>
		</div>
		<div class="flex flex-col space-y-4 items-center md:items-start text-right">
			<h3 class="text-xl font-semibold">Discover the Charm!</h3>
			<div class="flex justify-center md:justify-end space-x-2 mt-2">
				<a href={data.contact.facebook_link} class="hover:opacity-75">
					<img
						src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
						alt="Facebook"
						class="w-6 h-6"
					/>
				</a>
				<a href={data.contact.instagram_link} class="hover:opacity-75">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
						alt="Instagram"
						class="w-6 h-6"
					/>
				</a>http://new.williamston-mi.us/portals/47/Hansen%204a.jpg
				<a href={data.contact.twitter_link} class="hover:opacity-75">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
						alt="X"
						class="w-6 h-6"
					/>
				</a>
			</div>
		</div>
	</div>
</footer>
