<script>
  import Reviews from "./Reviews.svelte"

  
</script>

<style>
  .bgfield {
    background-image: url('$lib/assets/field-bg.jpeg');
  }
</style>
<div class="bg-base-300 shadow-lg rounded-box">
<div class="font-istok font-semibold mx-auto justify-center  container mx-auto">
	<div class="hero h-full  bgfield shadow-lg rounded-box">
		<div class="hero-content flex-col justify-items-center lg:flex-row-reverse backdrop-filter backdrop-blur-xs">
			<img
				src="https://www.arizonaseniorsolutions.com/static/media/carol.87d42bbe964dcfbf5e14.jpg"
				class="max-w-sm rounded-lg shadow-2xl"
			/>
			<div class="">
				<div class="">
          <h1 class="text-3xl text-center font-bold">WE ARE COMMITTED</h1>
          <p class="py-6 card bg-base-100 p-5 mt-3 backdrop-filter backdrop-blur bg-opacity-30">
            To Providing the Best Possible Service Through Integrity, Kindness and Respect We're here
            to help you find the right senior living community for your aging parent or spouse. Allow
            us to guide you through the process, answer all your pressing questions and deliver sound
            advice based on your unique needs.
          </p>
          <div class="flex flex-col jusitfy-center items-center pt-5">
            <a class="btn btn-primary rounded" href="tel:6025656101"
              >Call us for a consultation 602-565-6101 <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                />
              </svg>
            </a>
        </div>
				</div>
			</div>
		</div>
	</div>

  <section class="flex-col lg:flex-row lg:columns-2 columns-1 " style="background-color: rgb(237, 234, 229);">
    <div class="lg:pt-14">
      <div class="sm:text-3xl text-xl text-bold text-center pt-5">How our complimentary service works</div>
      <div class="md:flex justify-center py-5">
        <ul class="steps steps-horizontal">
          <li class="step step-primary">Call Us</li>
          <li class="step step-primary">Free Guidance</li>
          <li class="step">Placement</li>
          <li class="step">Peace of Mind</li>
        </ul>
      </div>
    </div>
    <div class="join join-vertical bg-base-200 lg:my-5 lg:pe-5 w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
          Speak with an Advocate
        </div>
        <div class="collapse-content"> 
          <p>Choose a setting: Assisted Living Home, Independent Living, Memory Care</p>
          <p>Discuss personalized needs. Create a budget. Outline an area closeby.</p>
          <p></p><br /><p>We will be with you every step of the way!</p>
          
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" /> 
        <div class="collapse-title text-xl font-medium">
          Review Suitable Options
        </div>
        <div class="collapse-content"> 
          <p>Based on our personal experiences with facilities and homes, we will give our best recommendations for your loved one's care. </p>
          <p>Our team will create a personalized plan with the owners to meet the needs of your schedule.</p> <br/>
          <p>You can tour these locations to select your favorite option</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" /> 
        <div class="collapse-title text-xl font-medium">
          Move In
        </div>
        <div class="collapse-content"> 
          <p>hello</p>
        </div>
      </div>
    </div>
  </section>

  <Reviews/>
</div>
</div>