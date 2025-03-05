<script>
// @ts-nocheck
	import { isOverlayOpen } from '../../stores/Overlay.js';
	export let open = false;
	export let product = null;
	export let close = () => {};
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
		role="button"
		tabindex="0"
		on:click={close}
		on:keydown={(e) => e.key === 'Enter' && close()}
	>
		<div
			class="relative w-full max-w-lg rounded-md bg-stone-800 p-6 shadow-md"
		>
			{#if product}
			<div>
				<img src={product.imageUrl} alt={product.title} class="mb-4 object-cover" />
			</div>
			<div class="flex justify-between text-white">
				<div>
					<h2 class="text-xl  font-bold">{product.title}</h2>
					<p>ราคา: {product.price}฿</p>
					<p>คงเหลือ: {product.stock} ชิ้น</p>
				</div>
				<div>
					<button
						class="flex rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
						on:click={() => isOverlayOpen.set(false)}
					>
						&times;
					</button>
				</div>
			</div>
			{/if}
			
		</div>
	</div>
{/if}

<!-- <div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-transparent z-99">
        <div class="bg-stone-900 text-white rounded-md px-8 py-10 relative max-w-lg">
            <button class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-0.5 transition-tranfrom"
            on:click={isOverlayOpen.set(false)}>&times;</button>
            <img src={productImage} alt={productTitle} class="mb-4 object-cover" />
            <h2 class="text-xl font-bold">{productTitle}</h2>
        </div>
    </div> -->
