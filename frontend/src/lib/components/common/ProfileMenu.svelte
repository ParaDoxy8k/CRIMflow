<script>
    import { writable } from "svelte/store";
  
    let profileMenu = writable(false);
    let user = {
      name: "Bia",
      email: "beer@example.com",
      avatar: "/images/logo_a.png",
      credit: 9999
    };

  </script>
<div class="absolute flex justify-end z-50 top-5 right-4 m-2">
    <button on:click={()=> profileMenu.update(v => !v)} class="flex h-12 w-12 items-center justify-center rounded-full hover:bg-gray-800">
        <img src={user.avatar} alt="Avatar" class="w-10 h-10 rounded-full">
    </button>
    {#if $profileMenu}
        <div class="absolute right-0 z-10 mt-11.5 mr-5 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <div class="px-2 py-1 text-sm text-gray-500">{user.name}</div>
                <div class="text-xl text-center m-2 bg-slate-900 rounded-2xl text-white">{user.credit} $</div>
                <a href="/setting" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="/dashboard" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                <a href="/topup" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Topup</a>
                <form method="POST" action="#" role="none">
                    <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                </form>
            </div>
        </div>
  {/if}
</div>