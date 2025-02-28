<script>
    import {
      products,
      isOverlayOpen,
      selectedProduct,
      handleCardClick,
      closeOverlay
    } from "../../stores/Overlay";
    import Overlay from "$lib/components/Overlay.svelte";
    // ถ้าต้องการทำงานเพิ่มเติมก็ใส่ที่นี่ได้
  </script>
  
<!-- แสดงรายการสินค้า -->
<main class="min-h-screen">
    <div class="relative flex min-h-[200px] py-6 sm:py-0 bg-gradient-to-b from-stone-950 to-transparent">
        <div class="absolute top-5 bottom-0 w-full h-fit flex justify-center">
            <a href="/"><img class="w-[120px] h-[120px] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-120" src="/images/logo_b-removebg.png" alt="logo"></a>
        </div>
    </div>
  <div class="px-4 mx-auto lg:mx-[220px] flex flex-wrap justify-center gap-8 pb-24">
    {#each $products as product}
      <div class="w-[350px] rounded-xl overflow-hidden">
        <img
          class="h-[196px] w-full object-cover"
          src={product.imageUrl}
          alt={product.title}
        />
        <div class="relative text-white p-4 pr-20 bg-gray-900">
            <h1 class="text-xl font-bold leading-tight mb-2">{product.title}</h1>
            <p class="text-sm mb-4">เหลือ {product.stock} ชิ้น</p>
            <p class="text-white/60 text-sm">{product.price}฿</p>
            <button
                class="absolute right-4 top-4 bg-gray-800 rounded-xl w-[50px] h-[50px] flex items-center justify-center text-xl transition duration-500 ease-in-out hover:bg-gray-700 cursor-pointer"
                on:click={() => handleCardClick(product)} aria-label='Add to cart'>
                <i class="fas fa-cart-arrow-down"></i>
            </button>
        </div>
      </div>
    {/each}
  </div>
</main>
<!-- Overlay (รับค่าจาก store) -->
<Overlay
    open={$isOverlayOpen}
    product={$selectedProduct}
    on:close={closeOverlay}
/>
  