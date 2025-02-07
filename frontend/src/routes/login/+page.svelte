<main class="flex h-screen items-center justify-center bg-wirte dark:bg-slate-850">
	<div class="items-center justify-center rounded-lg border w-1/4 border-black shadow-lg">
		<div>
			<p class=" py-3 text-center text-5xl font-bold dark:text-write ">เข้าสู่ระบบ</p>
		</div>
		<div class="flex flex-col gap-2 px-3 py-3 dark:bg-transparent">
			<div>
                <label for="login:useranme">ชื่อผู้ใช้ / Username</label>
				<input id="login:username" class="flex h-10 w-full border border-gray-300 p-2" placeholder="Username" />
			</div>
			<div>
                <label for="login:password">รหัสผ่าน / Password</label>
				<input id="login:password" class="flex h-10 w-full border border-gray-300 p-2" placeholder="Password" />
			</div>
			<button class="inline-flex justify-center items-center rounded-lg bg-indigo-500/50 px-4 py-2 text-center text-sm text-white hover:bg-indigo-500">เข้าสู่ระบบ</button>
		</div>
	</div>
</main>
