// src/stores/overlay.js
import { writable } from "svelte/store";

// 1) ถ้าคุณต้องการให้รายการสินค้าก็เป็น store ด้วย (จะได้ใช้งานด้วย $products)
export const products = writable([
  {
    id: 1,
    title: "ID ดองโรล เพชร 7,000-9,000",
    price: 50.0,
    stock: 19,
    imageUrl: "https://cdn.aona.co.th/1ighdlmud/59.png",
  },
  {
    id: 2,
    title: "ID ดองโรล เพชร 13,000 - 16,000",
    price: 150.0,
    stock: 10,
    imageUrl: "https://cdn.aona.co.th/1ighdlmud/59.png",
  },
  {
    id: 3,
    title: "ID ดองโรล sv.EU เพชร 31,000 - 37,000",
    price: 150.0,
    stock: 3,
    imageUrl: "https://cdn.aona.co.th/1ighdlmud/59.png",
  },
  {
    id: 4,
    title: "ID ดองโรล sv.EU เพชร 52,000 - 60,000",
    price: 400.0,
    stock: 5,
    imageUrl: "https://cdn.aona.co.th/1ighdlmud/59.png",
  },
  {
    id: 5,
    title: "เริ่มต้น 5 ดาว เลือกได้ 2 ตัว ( เลือกได้ทุกตัว )",
    price: 600.0,
    stock: 20,
    imageUrl: "https://cdn.aona.co.th/1ighdlmud/59.png",
  },
  // ... เพิ่มได้ตามต้องการ
]);

// 2) สถานะเปิด/ปิด Overlay
export const isOverlayOpen = writable(false);

// 3) เก็บสินค้าที่ถูกเลือก
export const selectedProduct = writable(null);

// 4) ฟังก์ชันเปิด Overlay พร้อมกำหนดสินค้าที่เลือก

// @ts-ignore
export function handleCardClick(product) {
  selectedProduct.set(product);
  isOverlayOpen.set(true);
}

// 5) ฟังก์ชันปิด Overlay
export function closeOverlay() {
  isOverlayOpen.set(false);
  selectedProduct.set(null);
}
