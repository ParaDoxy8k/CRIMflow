<script>
	import LineCharts from '$lib/components/dashboard/LineCharts.svelte';
	import BarCharts from '$lib/components/dashboard/BarCharts.svelte';
</script>

<div
	class="relative flex min-h-[200px] bg-gradient-to-b from-stone-950 to-transparent py-6 pb-32 pt-12 sm:py-0 md:pt-32"
>
	<div class="absolute bottom-0 top-5 flex h-fit w-full justify-center">
		<h1 class="items-center justify-center text-7xl font-bold text-white">Dashboard</h1>
	</div>
	
</div>
<main>
    <div class="mx-auto w-full px-4 md:px-10">
		<div>
			<div class="flex flex-wrap">
				<div class="w-full px-4 lg:w-6/12 xl:w-3/12">
					<div
						class="relative mb-6 flex min-w-0 flex-col break-words rounded bg-slate-800 shadow-lg xl:mb-0"
					>
						<div class="flex-auto p-4">
							<div class="flex flex-wrap">
								<div class="relative w-full max-w-full flex-1 flex-grow pr-4">
									<h5 class="text-xs font-bold uppercase text-white">TRAFFIC</h5>
									<span class="text-xl font-semibold text-white">350,897</span>
								</div>
								<div class="relative w-auto flex-initial pl-4">
									<div
										class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-3 text-center text-white shadow-lg"
									>
										<i class="far fa-chart-bar"></i>
									</div>
								</div>
							</div>
							<p class="text-blueGray-400 mt-4 text-sm">
								<span class="mr-2 text-emerald-500"> <i class="fas fa-arrow-up"> </i> 3.48%</span>
								<span class="whitespace-nowrap text-amber-50">Since last month</span>
							</p>
						</div>
					</div>
				</div>
				<div class="w-full px-4 lg:w-6/12 xl:w-3/12">
					<div
						class="relative mb-6 flex min-w-0 flex-col break-words rounded bg-slate-800 shadow-lg xl:mb-0"
					>
						<div class="flex-auto p-4">
							<div class="flex flex-wrap">
								<div class="relative w-full max-w-full flex-1 flex-grow pr-4">
									<h5 class="text-xs font-bold uppercase text-white">NEW USERS</h5>
									<span class="text-xl font-semibold text-white">2,356</span>
								</div>
								<div class="relative w-auto flex-initial pl-4">
									<div
										class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 p-3 text-center text-white shadow-lg"
									>
										<i class="fas fa-chart-pie"></i>
									</div>
								</div>
							</div>
							<p class="text-blueGray-400 mt-4 text-sm">
								<span class="mr-2 text-red-500"><i class="fas fa-arrow-down"></i> 3.48%</span>
								<span class="whitespace-nowrap text-amber-50">Since last week</span>
							</p>
						</div>
					</div>
				</div>
				<div class="w-full px-4 lg:w-6/12 xl:w-3/12">
					<div
						class="relative mb-6 flex min-w-0 flex-col break-words rounded bg-slate-800 shadow-lg xl:mb-0"
					>
						<div class="flex-auto p-4">
							<div class="flex flex-wrap">
								<div class="relative w-full max-w-full flex-1 flex-grow pr-4">
									<h5 class="text-xs font-bold uppercase text-white">SALES</h5>
									<span class="text-xl font-semibold text-white">924</span>
								</div>
								<div class="relative w-auto flex-initial pl-4">
									<div
										class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 p-3 text-center text-white shadow-lg"
									>
										<i class="fas fa-users"></i>
									</div>
								</div>
							</div>
							<p class="text-blueGray-400 mt-4 text-sm">
								<span class="mr-2 text-orange-500"><i class="fas fa-arrow-down"></i> 1.10%</span>
								<span class="whitespace-nowrap text-amber-50">Since yesterday</span>
							</p>
						</div>
					</div>
				</div>
				<div class="w-full px-4 lg:w-6/12 xl:w-3/12">
					<div
						class="relative mb-6 flex min-w-0 flex-col break-words rounded bg-slate-800 shadow-lg xl:mb-0"
					>
						<div class="flex-auto p-4">
							<div class="flex flex-wrap">
								<div class="relative w-full max-w-full flex-1 flex-grow pr-4">
									<h5 class="text-xs font-bold uppercase text-white">PERFORMANCE</h5>
									<span class="text-xl font-semibold text-white">49,65%</span>
								</div>
								<div class="relative w-auto flex-initial pl-4">
									<div
										class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 p-3 text-center text-white shadow-lg"
									>
										<i class="fas fa-percent"></i>
									</div>
								</div>
							</div>
							<p class="text-blueGray-400 mt-4 text-sm">
								<span class="mr-2 text-emerald-500"><i class="fas fa-arrow-up"></i> 12%</span>
								<span class="whitespace-nowrap text-amber-50">Since last month</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-6 mx-auto w-full px-4 md:px-10">
		<div>
			<div class="flex flex-wrap">
				<div class="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
					<LineCharts />
				</div>
				<div class="w-full px-4 xl:w-4/12">
					<BarCharts />
				</div>
			</div>
		</div>
	</div>
</main>
