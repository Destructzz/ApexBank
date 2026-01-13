<script setup lang="ts">
const accounts = [
  { id: 'a1', ownerName: 'You', level: 612, rankImage: '/rank-master.svg' },
  { id: 'a2', ownerName: 'Blake', level: 421, rankImage: '/rank-diamond.svg' },
  { id: 'a3', ownerName: 'Chris', level: 310, rankImage: '/rank-gold.svg' },
  { id: 'a4', ownerName: 'You', level: 155, rankImage: '/rank-gold.svg' }
]
</script>

<template>
  <div class="space-y-6">
    <section class="glass-hero">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(132,204,22,0.18),transparent_40%)]" />
      <div class="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="space-y-3">
          <p class="pill inline-flex">Demo • Hardcode</p>
          <h1 class="text-4xl font-extrabold tracking-tight text-gradient">Account Sharing (MVP)</h1>
          <p class="text-sm text-slate-300">
            Минимальный UI: карточки аккаунтов и профиль без бэкенда.
          </p>
        </div>
        <div class="flex gap-3">
          <NuxtLink to="/profile" class="btn-primary">Перейти в профиль</NuxtLink>
          <a class="btn-secondary" href="#accounts">Смотреть карточки</a>
        </div>
      </div>
    </section>

    <section id="accounts" class="surface-card">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h2 class="text-lg font-extrabold tracking-tight">Аккаунты</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">Данные захардкожены в этой странице</p>
        </div>
        <div class="pill">Preview</div>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="acc in accounts"
          :key="acc.id"
          to="/profile"
          class="surface-card relative block rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <div class="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-violet-500 to-cyan-400" />
          <div class="flex items-center justify-between">
            <img :src="acc.rankImage" alt="Rank" class="h-10 w-10" />
            <span class="pill">Rank</span>
          </div>

          <div class="mt-5 space-y-1">
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Level</div>
            <div class="text-3xl font-extrabold tracking-tight">{{ acc.level }}</div>
          </div>

          <div class="mt-4 space-y-1">
            <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Owner</div>
            <div class="text-sm font-semibold">{{ acc.ownerName }}</div>
          </div>

          <div class="mt-5 text-xs font-semibold text-slate-500 transition group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-50">
            Смотреть профиль →
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
