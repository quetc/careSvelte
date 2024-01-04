<script>import logo from '$lib/assets/logo.png';</script>

<div class="shadow-lg rounded-box bg-base-200">
	<div class="navbar  font-copse py-3 pb-6">
		<div class="ps-2 mx-2 flex justify-evenly container mx-auto">
			<div class=" ms-8 "><a href="/"><img class="w-12 sm:w-24" src={logo} /></a></div>
			<span class=" font-bold navbar-center ">
				<a class="btn btn-ghost grid grid-rows-2 visible items-center pt-3" href="/">
					<div class="row-span-1 md:text-xl text-base whitespace-nowrap">
						Senior Care Solutions of AZ
					</div>
					<small class="row-span-1 text-base mt-3" >602-565-6101</small>
				</a>
			</span>
		</div>
		<div class="hidden ps-8 mx-2 navbar-end md:ps-12 md:ms-12 md:flex">
			<div class="flex items-stretch">
				<a class="btn btn-ghost btn-sm rounded-btn" href="/"> Home </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="placement"> Placement </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="about"> About </a>
				<a class="btn btn-ghost btn-sm rounded-btn" href="contact"> Contact </a>
			</div>
		</div>
		<div class="navbar-end">
			
			
			
			<div class="dropdown dropdown-end md:invisible visbile">
				<label tabindex="0" class="btn btn-ghost rounded-btn">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					  </svg>
					  
				</label>
				<ul
					tabindex="0"
					class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
				>
					<li><a href="/">Home</a></li>
					<li><a href="placement">Placement</a></li>
					<li><a href="about">About</a></li>
					<li><a href="contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="text-lg md:text-2xl font-copse font-bold text-center bg-[#71a1f5] h-20 items-center justify-center"
	>
		<a class="btn btn-ghost btn-lg animate-pulse mt-2" href="tel:602-565-6101"
			>Our placement services are 100% free to you and your family</a
		>
	</div>
</div>