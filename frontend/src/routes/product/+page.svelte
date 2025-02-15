<script>
    import {
      products,
      isOverlayOpen,
      selectedProduct,
      handleCardClick,
      closeOverlay
    } from "../../stores/overlay.js";
    import Overlay from "$lib/components/Overlay.svelte";
    // ถ้าต้องการทำงานเพิ่มเติมก็ใส่ที่นี่ได้
  </script>
  
  <!-- แสดงรายการสินค้า -->
  <div class="container px-4 mx-auto flex flex-wrap justify-center gap-8 pb-24">
    {#each $products as product}
      <div class="w-[350px] rounded-xl overflow-hidden bg-gray-900 relative text-white p-4 pr-20">
        <img
          class="h-[196px] w-full object-cover mb-4"
          src={product.imageUrl}
          alt={product.title}
        />
        <h1 class="text-xl font-bold leading-tight mb-2">{product.title}</h1>
        <p class="text-sm mb-4">เหลือ {product.stock} ชิ้น</p>
        <p class="text-white/60 text-sm">{product.price}฿</p>
  
        <!-- ปุ่มกด (เปิด Overlay) -->
        <a
          class="absolute right-4 top-4 bg-gray-800 rounded-xl w-[50px] h-[50px] flex items-center justify-center text-xl transition hover:bg-gray-700 cursor-pointer"
          on:click={() => handleCardClick(product)}
        >
          <i class="fas fa-cart-arrow-down"></i>
        </a>
      </div>
    {/each}
  </div>
  
  <!-- Overlay (รับค่าจาก store) -->
  <Overlay
    open={$isOverlayOpen}
    product={$selectedProduct}
    on:close={closeOverlay}
  />
  