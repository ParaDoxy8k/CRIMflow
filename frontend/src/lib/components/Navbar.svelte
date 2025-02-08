<script>
    let isOpen = false;
</script>

<nav class="sticky top-0 z-20 flex justify-between border-b bg-gray-950 p-5">
    <!-- Logo & Links -->
    <div class="flex items-center gap-5">
        <a class="cursor-pointer" href="/home">
            <img src="https://www.figma.com/community/resource/d73d8a00-7fba-43f5-b31e-790cbed74b67/thumbnail"
                class="size-9 rounded-lg" alt="shop" />
        </a>
        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-6">
            <a href="/home" class="flex items-center gap-2 text-stone-50 hover:text-indigo-500">
                <i class="fa-solid fa-house-chimney"></i>
                <p>หน้าแรก</p>
            </a>
            <a href="/product" class="flex items-center gap-2 text-stone-50 hover:text-indigo-500">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>สินค้าทั้งหมด</p>
            </a>
        </div>
    </div>

    <!-- Login & Register -->
    <div class="hidden md:flex gap-4 items-center">
        <a href="/login" class="text-stone-50 hover:text-indigo-500">เข้าสู่ระบบ</a>
        <a href="/register">
            <button class="rounded-lg bg-indigo-500/50 px-4 py-2 text-sm text-white hover:bg-indigo-500">
                สมัครสมาชิก
            </button>
        </a>
    </div>

    <!-- Mobile Menu Button -->
    <button class="md:hidden text-white" on:click={() => isOpen = !isOpen}>
        <i class="fa-solid fa-bars text-2xl"></i>
    </button>
</nav>

<!-- Mobile Menu -->
{#if isOpen}
    <div class="absolute top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center text-white p-10">
        <button class="absolute top-5 right-5 text-2xl" on:click={() => isOpen = false}>
            <i class="fa-solid fa-xmark"></i>
        </button>
        <nav class="flex flex-col gap-5 text-lg mt-10">
            <a href="/home" class="hover:text-indigo-500">หน้าแรก</a>
            <a href="/product" class="hover:text-indigo-500">สินค้าทั้งหมด</a>
            <a href="/login" class="hover:text-indigo-500">เข้าสู่ระบบ</a>
            <a href="/register" class="rounded-lg bg-indigo-500/50 px-4 py-2 text-center text-white hover:bg-indigo-500">
                สมัครสมาชิก
            </a>
        </nav>
    </div>
{/if}

