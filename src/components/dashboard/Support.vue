<template>
  <main class="p-10 flex-1 w-full overflow-x-hidden">
    <div
      class="max-w-4xl mx-auto h-[calc(100vh-160px)] flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div class="bg-slate-50 p-6 border-b flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-bot" aria-hidden="true">
              <path d="M12 8V4H8"></path>
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg></div>
          <div>
            <h2 class="font-bold text-slate-800">{{ $t('support.title') }}</h2>
            <div class="flex items-center gap-1.5"><span
                class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span><span class="text-xs text-slate-500">{{
                  $t('support.status') }}</span></div>
          </div>
        </div>
        <div class="flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full"><svg
            xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-sparkles" aria-hidden="true">
            <path
              d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z">
            </path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </svg>{{ $t('support.badge') }}</div>
      </div>
      <div class="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
        <div class="flex justify-start animate-in fade-in duration-300">
          <div class="flex gap-3 max-w-[85%] flex-row">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-800 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-bot" aria-hidden="true">
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>
            <div class="space-y-2">
              <div
                class="p-4 rounded-2xl shadow-sm text-sm leading-relaxed bg-white text-slate-700 rounded-tl-none border border-slate-100">
                {{ $t('support.greeting') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 border-t bg-white">
        <div class="flex gap-3">
          <input :placeholder="$t('support.placeholder')"
            class="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
            type="text" value="">
          <button disabled
            class="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:scale-100 hover:scale-105 active:scale-95 flex items-center justify-center"><svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-send" aria-hidden="true">
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
              </path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg></button>
        </div>
        <p class="text-[10px] text-center text-slate-400 mt-2">{{ $t('support.disclaimer') }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>
