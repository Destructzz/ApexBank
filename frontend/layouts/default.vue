<script setup lang="ts">
onMounted(() => {
  if (!process.client) return
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <div class="container-page">
    <header class="surface-card flex items-center justify-between gap-4 border-emerald-400/30">
      <div class="flex items-center gap-3">
        <div class="h-3 w-3 rounded-full bg-gradient-to-br from-emerald-400 to-lime-300 shadow-[0_0_0_6px_rgba(34,197,94,0.15)]" />
        <NuxtLink to="/" class="text-sm font-extrabold tracking-tight text-gradient">Apex Sharing</NuxtLink>
      </div>

      <nav class="flex items-center gap-2">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/profile" class="nav-link">Profile</NuxtLink>
      </nav>
    </header>

    <main class="mt-6 space-y-4">
      <slot />
    </main>
  </div>
</template>
