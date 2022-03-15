<section id="spinner" class="w-full h-full m-auto">
	<section class="absolute flex items-center h-8 transform -translate-x-1/2 top-1/2 left-1/2 ">
		<div class="inline-flex flex-row items-center justify-between w-12 mx-auto flex-nowrap">
			<div class="w-3 h-3 -translate-x-1/2 -translate-y-full rounded-full bg-primary" />
			<div class="w-3 h-3 -translate-x-1/2 -translate-y-full rounded-full bg-primary" />
			<div class="w-3 h-3 -translate-x-1/2 -translate-y-full rounded-full bg-primary" />
		</div>
	</section>
</section>

<style>
	div {
		animation: wave 0.8s ease-in-out alternate infinite;
	}

	div:nth-of-type(1) {
		animation-delay: -0.4s;
	}

	div:nth-of-type(2) {
		animation-delay: -0.2s;
	}

	@keyframes wave {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}
</style>
