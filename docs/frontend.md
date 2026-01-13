# Frontend (Nuxt) — опорный документ

## Цель
- Делать фронт предсказуемо: одинаковая структура, одинаковые правила, минимум “магии”.
- Минимальный MVP: 2 страницы — `/` и `/profile`.

## Stack
- Nuxt 4 + Vite.
- Tailwind CSS (тема фиксированно dark; class `dark` принудительно добавляем на `<html>`).
- Package manager: bun.

## Структура (фиксируем)
- Роуты: `frontend/app/pages/*`.
- Layouts: `frontend/layouts/*`.
- Глобальные стили: `frontend/app/assets/tailwind.css`.
- Статика (картинки/иконки): `frontend/public/*`.

## Жёсткие правила кода
- НЕТ `@/` и `~/` в импортах. НЕТ.
- Все импорты относительные.
  - Пример: из `frontend/app/pages/index.vue` импорт в `frontend/layouts/default.vue` невозможен напрямую — лучше вынести общий компонент в `frontend/components/*` и импортировать его относительным путём.
- Не полагаться на auto-import компонентов. Всегда делать явный `import`.
- Не полагаться на “авто-роутинг из непонятно где”: страницы только в `app/pages`.

## Страницы (конкретно)

### `/` (Home)
**Содержимое**
- Hero:
  - Заголовок продукта.
  - Подзаголовок 1 строка.
  - CTA кнопка “Перейти в профиль” → `/profile`.
- Grid карточек аккаунтов (вертикальные прямоугольники).

**Данные**
- Hardcode в `frontend/app/pages/index.vue` как массив объектов.
- Поля карточки:
  - `rankImage` (путь до картинки в `public/`, например `/rank-gold.svg`).
  - `level` (число).
  - `ownerName` (строка).

**UI карточки**
- Вертикальная прямоугольная карточка.
- Верх: маленькая картинка ранга (иконка).
- Далее: `Level` крупно.
- Ниже: `Owner`.

### `/profile`
**Содержимое**
- Header профиля:
  - аватарка (initials) + имя/роль.
- Stats блок (2 плитки):
  - `Всего аккаунтов (моих)`
  - `Доступно аккаунтов`
- Ниже: можно повторить список карточек (опционально).

**Данные**
- Hardcode прямо в `frontend/app/pages/profile.vue` (или импортнуть общий массив из `frontend/app/pages/_data.ts`, но только относительным импортом).

## Дизайн (мелочи, как zod.dev)
- Цвета: база — почти чёрный `slate-950`; акцент — неон `emerald/lime`.
- Карточки: `rounded-2xl`, `border-emerald-400/20`, фон `bg-slate-950/80`, `backdrop-blur`, тень `shadow-emerald-500/10`, hover: `hover:-translate-y-1` + `hover:shadow-2xl`.
- Hero: стекло (`glass-hero`) с радиальными зелёными бликами.
- Кнопки:
  - Primary: градиент `from-emerald-500 to-lime-400`, `rounded-xl`, `px-4 py-2`, `text-sm font-extrabold`, тень/hover-подъём.
  - Secondary: `border-emerald-400/40`, фон `bg-slate-900/60`, лёгкий подъём.
- Контейнер: `max-w-6xl mx-auto px-6 py-10`.
- Typography: H1 `text-4xl font-extrabold`, субтекст `text-sm text-slate-300`, градиентный текст — класс `text-gradient` (`emerald/lime`).

## Навигация
- Простейшая шапка в `frontend/layouts/default.vue`: ссылки `/` и `/profile`.
- Тема фиксированная (dark-only), без переключателя.

## Команды
- Dev: `bun run dev -- --host 0.0.0.0`
- Build: `bun run build`
- Prepare (после правок структуры/конфига): `bunx nuxt prepare`

## Чеклист перед коммитом
- Поиск по коду: нет `@/` и нет `~/`.
- Все импорты относительные.
- `bun run build` проходит.
- Только 2 страницы: `app/pages/index.vue` и `app/pages/profile.vue`.
- Картинки рангов лежат в `public/`.
