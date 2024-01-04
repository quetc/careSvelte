<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	let options = { loop: true };
	let plugins = [Autoplay()];
</script>

<section class="mx-auto bg-blue-200 text-center text-semibold text-2xl font-copse py-5 bg-base-300">
	Reviews
</section>
<div class=" w-250 flex items-center justify-center bg-base-200 py-3">
	<div
		class="embla px-5 border-solid border-2 rounded-xl bg-base-100 bgfield "
		use:emblaCarouselSvelte={{ options, plugins }}
	>
		<div class="embla__container py-3">
			<div class="embla__slide flex items-center justify-center rounded-lg py-7 my-3 mb-4 ">
				<card class=" rounded-xl border-2 text-center p-5 ring-offset-2 ring-4 bg-base-100 backdrop-filter backdrop-blur bg-opacity-50 p-3">
					<div class="text-center pb-3">Robert L</div>
					<hr />
					<p class="mt-3">
						CaroleLynne is the perfect advocate for finding placement for you and or your beloved
						family member. She has years of experience helping families bringing a multitude of
						success stories finding the right match for the needs at hand. You can't go wrong with
						Senior Care Solutions of Arizona.
					</p>
					<div class="rating mt-3">
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
					</div>
				</card>
			</div>

			<div class="embla__slide flex items-center justify-center rounded-lg py-7 my-3 mb-4 ">
				<card class=" rounded-xl border-2 text-center ring-offset-2 ring-4 p-3 bg-base-100  backdrop-filter backdrop-blur bg-opacity-50">
					<div class="text-center pb-3">Len B</div>
					<hr />
					<p class="mt-3">
						"CaroleLynne was a tremendous help to our family when we needed to get my mother into a care facility. Senior Care Solutions of AZ provided us with answers and suggestions that we needed to make good decisions. I highly recommend asking CaroleLynne forassistance when caring for your loved one.",

					</p>
					<div class="rating mt-3">
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
					</div>
				</card>
			</div>

            <div class="embla__slide flex items-center justify-center rounded-lg py-7 my-3 mb-4 ">
				<card class=" rounded-xl border-2 text-center ring-offset-2 ring-4 p-3  bg-base-100 backdrop-filter backdrop-blur bg-opacity-50">
					<div class="text-center pt-2">Sharin D</div>
					<hr />
					<p class="mt-3">
						"As a SNF case manager, I have worked with Carol-Lynne for years. I have seen her work tirelessly to find safe placement for many patients. I can always count on her to do what’s right for her clients regardless of the time spent or the compensation. Her work ethic and kindness is a rarity in todays world. If ever my mother needs to be placed, she will without a doubt be my first call.",

					</p>
					<div class="rating mt-3">
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
					</div>
				</card>
			</div>

        
		</div>
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
		width: 95%;
		height: 400px;
	}
	.embla__container {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 55%; /* Each slide covers 80% of the viewport */
	}
	.embla__slide {
		flex: 0 0 40%;
		min-width: 0;
		height: 350px;
        margin-right: 40px;
	}
	@media (max-width: 468px) {
		.embla__container {
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: 100%; /* Each slide covers 80% of the viewport */
		}
		.embla__slide {
			flex: 0 0 50%;
			min-width: 0;
			height: 30px;
            margin-top: 150px;
            padding-top: 20px;
            margin-bottom: 150px;
            margin-right: 20px;
		}
	}

	.bgfield {
    background-image: url('$lib/assets/testimonial1.jpeg');
  }
</style>
