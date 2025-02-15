// src/stores/overlay.js
import { writable } from "svelte/store";

// 1) ถ้าคุณต้องการให้รายการสินค้าก็เป็น store ด้วย (จะได้ใช้งานด้วย $products)
export const products = writable([
  {
    id: 1,
    title: "ZZZ ดองโรล เพชร 3,500 - 8,000",
    price: 50.0,
    stock: 19,
    imageUrl: "https://example.com/some-image.png",
  },
  {
    id: 2,
    title: "AAA สินค้า A",
    price: 100.0,
    stock: 10,
    imageUrl: "https://example.com/another-image.png",
  },
  // ... เพิ่มได้ตามต้องการ
]);

// 2) สถานะเปิด/ปิด Overlay
export const isOverlayOpen = writable(false);

// 3) เก็บสินค้าที่ถูกเลือก
export const selectedProduct = writable(null);

// 4) ฟังก์ชันเปิด Overlay พร้อมกำหนดสินค้าที่เลือก
export function handleCardClick(product) {
  selectedProduct.set(product);
  isOverlayOpen.set(true);
}

// 5) ฟังก์ชันปิด Overlay
export function closeOverlay() {
  isOverlayOpen.set(false);
  selectedProduct.set(null);
}
