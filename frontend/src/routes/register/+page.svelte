<script>
	
</script>
<main class="flex h-screen items-center justify-center ">
	<div class="items-center justify-center rounded-lg border w-1/4 border-amber-50 shadow-lg">
		<div>
			<p class=" py-3 text-center text-5xl font-bold text-white">สมัครสมาชิก</p>
		</div>
		<div class="flex flex-col gap-2 px-3 py-3">
            <div>
                <label for="register:email" class="text-white">อีเมล์ผู้ใช้ / Email</label>
				<input id="register:email" type="text" class="flex h-10 w-full border text-amber-50 border-gray-300 p-2" placeholder="Email" />
			</div>
			<div>
                <label for="register:useranme" class="text-white">ชื่อผู้ใช้ / Username</label>
				<input id="register:username" type="text" class="flex h-10 w-full border text-amber-50 border-gray-300 p-2" placeholder="Username" />
			</div>
			<div>
                <label for="register:password" class="text-white">รหัสผ่าน / Password</label>
				<input id="register:password" type="password" class="flex h-10 w-full border text-amber-50 border-gray-300 p-2" placeholder="Password" />
			</div>
			<button class="inline-flex justify-center items-center rounded-lg bg-indigo-500/50 px-4 py-2 text-center text-sm text-white hover:bg-indigo-500">สมัครสมาชิก</button>
		</div>
	</div>
</main>
