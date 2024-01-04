<script>
	const pink = 'text-pink-500'; // Define the pink color class

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faFacebook } from '@fortawesome/free-brands-svg-icons';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="bg-gray-100 py-5">
	<div class="container mx-auto">
		

		<div class="flex flex-col w-full lg:flex-row">
			<div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
				<h3 class="text-2xl lg:text-4xl text-center">Thank you for supporting us!</h3>
			</div>
			<div class="divider lg:divider-horizontal"></div>
			<div class="grid flex-grow h-32 card bg-base-300 rounded-box ">
				<div class="text-center m-5 pt-6 flex justify-around">
					<!-- Replace with actual social icons or links -->
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="mx-2">
						<span class="text-4xl">
							<Fa icon={faFacebook} />
						</span>
					</a>
					<a href="mailto:care@senior-care-solutions.com" class="mx-2">
						<span class="text-4xl">
							<Fa icon={faEnvelope} />
						</span>
					</a>
					<a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" class="mx-2">
						<span class="text-4xl">
							<Fa icon={faLinkedin} />
						</span>
					</a>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
			<div class="text-sm lg:text-base text-gray-600 ms-4">
				© 2022 Senior Care Solutions |
				<a href="/privacy" class="ml-1">Privacy Policy</a> |
				<a href="/disclosure" class="ml-1">Disclosure</a>
			</div>
		</div>
	</div>
</div>
