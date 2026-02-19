<template>
    <div class="p-4 sm:p-6 lg:p-8 ">
        <div class="mb-8">
            <h1 class="text-xl sm:text-[28px] font-bold text-[#1a2b50] mb-1">{{ $t('training.center.headerTitle') }}
            </h1>
            <p class="text-[9px] sm:text-[11px] font-bold text-[#3169e1] uppercase tracking-wider">{{
                $t('training.center.platformName') }}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div
                class="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
                <div
                    class="w-14 h-14 bg-blue-50 text-blue-600 rounded-[20px] flex items-center justify-center shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-layers" aria-hidden="true">
                        <path
                            d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z">
                        </path>
                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </svg>
                </div>
                <div>
                    <p class="text-2xl font-black text-slate-800">{{ stats.blocks_count || 0 }}</p>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">{{
                        $t('training.stats.blocksCount') }}</p>
                </div>
            </div>

            <div
                class="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
                <div
                    class="w-14 h-14 bg-green-50 text-green-600 rounded-[20px] flex items-center justify-center shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-bookmark" aria-hidden="true">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                    </svg>
                </div>
                <div>
                    <p class="text-2xl font-black text-slate-800">{{ stats.educational_fields_count || 0 }}</p>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">{{
                        $t('training.stats.educationalFields') }}
                    </p>
                </div>
            </div>

            <div
                class="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
                <div
                    class="w-14 h-14 bg-orange-50 text-orange-600 rounded-[20px] flex items-center justify-center shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-book-open" aria-hidden="true">
                        <path d="M12 7v14"></path>
                        <path
                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                        </path>
                    </svg>
                </div>
                <div>
                    <p class="text-2xl font-black text-slate-800">{{ stats.tutorials_count || 0 }}</p>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">{{
                        $t('training.stats.totalTutorials') }}
                    </p>
                </div>
            </div>

            <div
                class="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
                <div
                    class="w-14 h-14 bg-purple-50 text-purple-600 rounded-[20px] flex items-center justify-center shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-file-check" aria-hidden="true">
                        <path
                            d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z">
                        </path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="m9 15 2 2 4-4"></path>
                    </svg>
                </div>
                <div>
                    <p class="text-2xl font-black text-slate-800">{{ stats.tests_count || 0 }}</p>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">{{
                        $t('training.stats.testQuestions') }}
                    </p>
                </div>
            </div>
        </div>

        <div
            class="flex items-center gap-2 text-sm font-bold text-slate-400 mb-6 bg-white/50 p-3 rounded-xl backdrop-blur-sm self-start">
            <button class="hover:text-blue-600 transition-colors">{{ $t('training.center.teachingManagement')
                }}</button>
        </div>

        <div
            class="bg-white/40 backdrop-blur-xl rounded-[48px] border border-white/50 p-10 min-h-[600px] shadow-2xl shadow-blue-100/50 z-10 relative">
            <div class="flex items-center justify-between mb-8">
                <h2 class="text-[22px] font-bold text-[#1a2b50]">{{ $t('training.blocks.title') }}</h2>
                <button class="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ $t('training.center.manageBlocks') }}
                </button>
            </div>

            <!-- Blocks Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Loading Skeletons -->
                <template v-if="loading && blocks.length === 0">
                    <SkeletonCard v-for="n in 6" :key="n" />
                </template>

                <!-- Actual Blocks -->
                <template v-else>
                    <router-link v-for="block in blocks" :key="block.id"
                        :to="{ name: 'block-detail', params: { blockId: block.id } }"
                        class="w-full h-full text-left bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col justify-between">
                        <div class="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center mb-6">
                            <svg class="w-6 h-6 text-[#3169e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>

                        <h3 class="text-[17px] font-bold text-[#1a2b50] mb-2">{{ block.title }}</h3>
                        <p class="text-[13px] text-gray-400 leading-relaxed mb-8">{{ block.desc }}</p>

                        <div class="flex items-center justify-between mt-auto">
                            <span class="text-[11px] font-black text-[#3169e1] uppercase tracking-wider">{{ block.count
                                }}
                                {{ $t('training.blocks.directions') }}</span>
                            <div
                                class="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <svg class="w-4 h-4 text-gray-300 group-hover:text-[#3169e1]" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </router-link>
                </template>

                <!-- Empty State -->
                <div v-if="!loading && blocks.length === 0"
                    class="col-span-full flex flex-col items-center justify-center py-20 px-4">
                    <div class="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-slate-700 mb-2">{{ $t('training.center.emptyTitle') }}</h3>
                    <p class="text-sm text-slate-400">{{ $t('training.center.emptyDescription') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fetchBlocks, fetchStats } from '../../services/trainingService';
import SkeletonCard from '../common/SkeletonCard.vue';

const blocks = ref([]);
const stats = ref({
    blocks_count: 0,
    educational_fields_count: 0,
    tutorials_count: 0,
    tests_count: 0
});
const loading = ref(true);
const error = ref(null);

// Cache key for sessionStorage
const CACHE_KEY = 'training_blocks_cache';

// Load cached data from sessionStorage
const loadCachedData = () => {
    try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
            const data = JSON.parse(cached);
            blocks.value = data;
            return true;
        }
    } catch (err) {
        console.error('Failed to load cached blocks:', err);
    }
    return false;
};

// Save data to sessionStorage
const saveCachedData = (data) => {
    try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (err) {
        console.error('Failed to cache blocks:', err);
    }
};

// Fetch blocks from API
const loadBlocks = async () => {
    try {
        loading.value = true;
        error.value = null;

        const response = await fetchBlocks();

        if (response.success && response.data && response.data.data) {
            // Map API response to component format
            const mappedBlocks = response.data.data.map(block => ({
                id: block.id,
                title: block.name,
                desc: block.description,
                count: block.educational_fields_count || 0
            }));

            blocks.value = mappedBlocks;
            saveCachedData(mappedBlocks);
        }
    } catch (err) {
        console.error('Failed to load blocks:', err);
        error.value = 'Ma\'lumotlarni yuklashda xatolik yuz berdi';

        // Fallback to mock data on error if no cached data was available
        if (blocks.value.length === 0) {
            blocks.value = [
                { id: 1, title: 'Chakana', desc: 'Chakana bank xizmatlari va operatsiyalari', count: 4 },
                { id: 2, title: 'Korporativ / Yuridik', desc: 'Yuridik shaxslar bilan ishlash va kreditlash', count: 3 },
                { id: 3, title: 'IT', desc: 'Axborot texnologiyalari va qo\'llab-quvvatlash', count: 2 },
                { id: 4, title: 'Soft skill', desc: 'Shaxsiy rivojlanish va muloqot standartlari', count: 2 }
            ];
        }
    } finally {
        loading.value = false;
    }
};

// Stats cache key
const STATS_CACHE_KEY = 'training_stats_cache';

const loadCachedStats = () => {
    try {
        const cached = sessionStorage.getItem(STATS_CACHE_KEY);
        if (cached) {
            stats.value = JSON.parse(cached);
            return true;
        }
    } catch (err) {
        console.error('Failed to load cached stats:', err);
    }
    return false;
};

// Load stats from API
const loadStats = async () => {
    try {
        const response = await fetchStats();
        if (response.success && response.data) {
            stats.value = response.data;
            // Cache the fresh stats
            try {
                sessionStorage.setItem(STATS_CACHE_KEY, JSON.stringify(response.data));
            } catch (e) {
                console.error('Failed to cache stats:', e);
            }
        }
    } catch (err) {
        console.error('Failed to load stats:', err);
    }
};

// Load data on mount
onMounted(async () => {
    // First, try to load cached data
    const hasCachedData = loadCachedData();
    loadCachedStats(); // Load stats from cache immediately

    // If we have cached data, show it immediately and set loading to false
    if (hasCachedData) {
        loading.value = false;
    }

    // Load stats in parallel
    loadStats();

    // Then fetch fresh data in the background
    await loadBlocks();
});
</script>

<style scoped>
/* Google fontga o'xshash inter yoki sans-serif */
div {
    font-family: 'Inter', sans-serif;
}
</style>