<script lang="ts">
  import "./layout.css";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<div
  class="pointer-events-none fixed inset-0 isolate z-[-1] size-full h-dvh w-screen bg-background [background-image:var(--bg-url)] bg-cover bg-scroll bg-center bg-no-repeat">
</div>

<div class="invisible h-12 w-full"></div>
<header
  class="@container fixed top-0 left-0 isolate z-35 h-12 w-full border-b glass px-2.5 pt-[env(safe-area-inset-top,0)] pr-[max(0.625rem,env(safe-area-inset-right))] pl-[max(0.625rem,env(safe-area-inset-left))] leading-12">
  <div class="flex h-full w-full items-center-safe justify-between">
    <div class="flex gap-2">
      <div class="flex items-center-safe justify-center-safe gap-2 font-bold" data-sveltekit-preload-data="hover">
        <img loading="lazy" src="/img/app-icons/svg.svg" alt="SkyCrypt" class="pointer-events-none h-6 select-none" />
      </div>
      <div class="flex flex-col items-start justify-center-safe gap-1">
        <div class="leading-none font-bold text-nowrap" data-sveltekit-preload-data="hover">SkyCrypt</div>
      </div>
    </div>
  </div>
</header>

{@render children()}
