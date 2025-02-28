<script>
	let email = '';
	let username = '';
	let password = '';
	let ConfirmPassword = '';
	let showPassword = false;
	let showConfirmPassword = false;
	let errorMessage = '';
	let successMessage = '';

	async function handleSubmit() {
		if (!email || !username || !password || !ConfirmPassword) {
			errorMessage = '⚠️ กรุณากรอกข้อมูลให้ครบทุกช่อง!';
			return;
		}

		if (password !== ConfirmPassword) {
			errorMessage = '❌ รหัสผ่านไม่ตรงกัน!';
			return;
		}

		errorMessage = '';

		try {
			const response = await fetch('https://localhost:5000/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, username, password })
			});
			const data = await response.json();
			if (response.ok) {
				successMessage = '✅ สมัครสมาชิกสำเร็จ!';
			} else {
				errorMessage = data.error || '❌ เกิดข้อผิดพลาด!';
			}
		} catch (error) {
			errorMessage = '❌ ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์!';
		}
	}
</script>

<main class="flex min-h-screen items-center justify-center ml-auto lg:ml-[220px]">
	<div class="w-2.5/4 min-md:w-md items-center justify-center rounded-lg border border-amber-50 shadow-lg">
		<form on:submit|preventDefault={handleSubmit}>
			<div>
				<p class=" py-3 text-center text-5xl font-bold text-white">สมัครสมาชิก</p>
			</div>
			<div class="flex flex-col gap-2 px-3 py-3">
				<div>
					<label for="register:email" class="text-white">อีเมล์ผู้ใช้ / Email</label>
					<input
						bind:value={email}
						id="register:email"
						type="email"
						class="flex h-10 w-full border border-gray-300 p-2 text-amber-50"
						placeholder="Email"
					/>
				</div>
				<div>
					<label for="register:useranme" class="text-white">ชื่อผู้ใช้ / Username</label>
					<input
						bind:value={username}
						id="register:username"
						type="text"
						class="flex h-10 w-full border border-gray-300 p-2 text-amber-50"
						placeholder="Username"
					/>
				</div>
				<div>
					<label for="register:password" class="text-white">รหัสผ่าน / Password</label>
					<input
						bind:value={password}
						id="register:password"
						type={showPassword ? 'text' : 'password'}
						class="flex h-10 w-full border border-gray-300 p-2 text-amber-50"
						placeholder="Password"
					/>
					<button type="button" on:click={() => (showPassword = !showPassword)}>
						{showPassword ? '🙈 Hide' : '👁 Show'}
					</button>
				</div>
				<div>
					<label for="register:password" class="text-white">ยืนยันรหัสผ่าน / Confirm Password</label
					>
					<input
						bind:value={ConfirmPassword}
						id="register:password"
						type={showConfirmPassword ? 'text' : 'password'}
						class="flex h-10 w-full border border-gray-300 p-2 text-amber-50"
						placeholder="Password"
					/>
					<button type="button" on:click={() => (showConfirmPassword = !showConfirmPassword)}>
						{showConfirmPassword ? '🙈 Hide' : '👁 Show'}
					</button>
				</div>
				{#if errorMessage}
					<p style="color: red;">{errorMessage}</p>
				{/if}

				{#if successMessage}
					<p style="color: green;">{successMessage}</p>
				{/if}
				<button
					type="submit"
					class="inline-flex items-center justify-center rounded-lg bg-indigo-500/50 px-4 py-2 text-center text-sm text-white hover:bg-indigo-500"
					>สมัครสมาชิก</button>
			</div>
		</form>
	</div>
</main>
