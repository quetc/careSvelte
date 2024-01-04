<script>
	import { onMount } from 'svelte';
	import emailjs from '@emailjs/browser';
	import contact from '$lib/assets/contact.jpeg';

	const serviceIdContact = 'service_yu1omg9';
	const templateIdContact = 'template_q64ztcq';
	const userIdContact = 'fyejM9DucPV2ID0UG';
	const serviceIdTestimonial = 'service_yu1omg9';
	const templateIdTestimonial = 'template_aekk8md';
	const userIdTestimonial = 'fyejM9DucPV2ID0UG';

	let formType = 'contact';
	const form = {};

	const switchForm = () => {
		formType = formType === 'contact' ? 'testimonial' : 'contact';
	};

	const sendEmail = (e) => {
		e.preventDefault();

		const serviceId = formType === 'contact' ? serviceIdContact : serviceIdTestimonial;
		const templateId = formType === 'contact' ? templateIdContact : templateIdTestimonial;
		const userId = formType === 'contact' ? userIdContact : userIdTestimonial;

		emailjs.sendForm(serviceId, templateId, e.target, userId).then(
			(result) => {
				console.log('Email sent successfully:', result.text);
			},
			(error) => {
				console.error('Error sending email:', error.text);
			}
		);

		e.target.reset(); // Reset the form
	};

	onMount(() => {
		// Add any necessary initialization code here
	});
</script>

<div class="mainContent " style="background-color: #EDEAE5;">
	<div class="container mx-auto hero-full" id="contact">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mx-4 card bg-base-500">
			<div class="my-auto lg:col-span-1">
				<img src={contact} alt="Contact Us" class="w-full rounded rounded-box" />
			</div>

			<div class="lg:col-span-1 mt-4 mb-3">
				<button class="bg-info glass btn text-white w-full mb-4" on:click={switchForm}>
					Switch to {formType === 'contact' ? 'Testimonial' : 'Contact'} Form
				</button>
				<div class="card rounded bg-base-300 p-5">
					{#if formType === 'contact'}
						<b class="text-center text-2xl">Contact us today!</b>
						<hr />
						<form class="form" id="contactForm" ref={form} on:submit={sendEmail}>
							<label for="name" class="block mb-2">Name</label>
							<input type="text" id="name" name="from_name" class="input mb-4 w-full" required />

							<label for="phone" class="block mb-2">Phone</label>
							<input type="text" id="phone" name="phone" class="input mb-4 w-full" required />

							<label for="email" class="block mb-2">Email</label>
							<input type="email" id="email" name="user_email" class="input mb-4 w-full" required />

							<label for="message" class="block mb-2">Message</label>
							<textarea id="message" name="message" rows="3" class="textarea mb-4 w-full" />

							<button type="submit" class="bg-primary btn text-white w-full"> Send </button>
						</form>
					{:else}
						<b class="text-center text-2xl">Send some love!</b>
						<hr />
						<form class="form" id="testimonialForm" ref={form} on:submit={sendEmail}>
							<label for="name" class="block mb-2">Name</label>
							<input type="text" id="name" name="from_name" class="input mb-4 w-full" required />

							<label for="email" class="block mb-2">Email</label>
							<input type="email" id="email" name="user_email" class="input mb-4 w-full" required />

							<label for="message" class="block mb-2">Message</label>
							<textarea id="message" name="message" rows="3" class="textarea mb-4 w-full" />

							<button type="submit" class="bg-primary btn text-white w-full"> Send </button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Add your custom styles here */
</style>
