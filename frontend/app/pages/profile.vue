<script setup lang="ts">
const user = {
  name: 'You',
  role: 'Admin',
  accent: 'from-violet-500 via-fuchsia-500 to-cyan-400'
}

const accounts = [
  { id: 'a1', ownerName: 'You', level: 612, rankImage: '/rank-master.svg' },
  { id: 'a2', ownerName: 'Blake', level: 421, rankImage: '/rank-diamond.svg' },
  { id: 'a3', ownerName: 'Chris', level: 310, rankImage: '/rank-gold.svg' },
  { id: 'a4', ownerName: 'You', level: 155, rankImage: '/rank-gold.svg' }
]

const totalMine = computed(() => accounts.filter((a) => a.ownerName === 'You').length)
const available = computed(() => accounts.length)

const initials = computed(() => {
  const parts = user.name.trim().split(' ').filter(Boolean)
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase() || 'U'
})
</script>

<template>
  <div class="space-y-6">
    <section class="glass-hero">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.25),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.25),transparent_45%)]" />
      <div class="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-4">
          <div
            class="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br text-xl font-extrabold text-white shadow-lg shadow-violet-500/30"
            :class="user.accent"
          >
            {{ initials }}
          </div>
          <div>
            <div class="text-2xl font-extrabold tracking-tight">{{ user.name }}</div>
            <div class="mt-1 inline-flex items-center gap-2">
              <span class="pill">{{ user.role }}</span>
              <span class="text-xs text-slate-500 dark:text-slate-400">hardcode</span>
            </div>
          </div>
        </div>
        <NuxtLink to="/" class="btn-secondary">На главную</NuxtLink>
      </div>
    </section>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="surface-card">
        <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Всего аккаунтов (моих)</div>
        <div class="mt-1 text-3xl font-extrabold tracking-tight">{{ totalMine }}</div>
      </div>
      <div class="surface-card">
        <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Доступно аккаунтов</div>
        <div class="mt-1 text-3xl font-extrabold tracking-tight">{{ available }}</div>
      </div>
    </section>

    <section class="surface-card">
      <div class="mb-3 flex items-center justify-between">
        <h2 class="text-base font-extrabold tracking-tight">Аккаунты</h2>
        <div class="pill">Preview</div>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="acc in accounts" :key="acc.id" class="surface-card rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-2xl">
          <div class="flex items-center justify-between">
            <img :src="acc.rankImage" alt="Rank" class="h-10 w-10" />
            <span class="pill">Lvl {{ acc.level }}</span>
          </div>
          <div class="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">Owner</div>
          <div class="mt-1 text-sm font-semibold">{{ acc.ownerName }}</div>
        </div>
      </div>
    </section>
  </div>
</template>
