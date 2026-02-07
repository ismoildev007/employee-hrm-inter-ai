<template>
  <main class="p-10 flex-1 w-full overflow-x-hidden">
    <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-blue-800">{{ $t('assessment.title') }}</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-slate-700">{{ $t('assessment.fields.tabelNumber') }}</label>
          <input required
            class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
            :placeholder="$t('assessment.placeholders.tabelNumber')" type="text" value="">
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700">{{ $t('assessment.fields.region') }}</label>
          <input required class="mt-1 block w-full rounded-md border-slate-300 shadow-sm border p-2" type="text"
            value="">
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700">{{ $t('assessment.fields.division') }}</label>
          <input required class="mt-1 block w-full rounded-md border-slate-300 shadow-sm border p-2" type="text"
            value="">
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700">{{ $t('assessment.fields.position') }}</label>
          <input required class="mt-1 block w-full rounded-md border-slate-300 shadow-sm border p-2" type="text"
            value="">
        </div>
        <button type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex justify-center items-center">
          {{ $t('assessment.actions.nextStep') }}
        </button>
      </form>
    </div>
  </main>
</template>

<script setup>
</script>
