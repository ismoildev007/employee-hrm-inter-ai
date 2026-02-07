<template>
  <div class="flex h-full bg-gray-50 flex-col md:flex-row relative">
    <!-- Desktop Sidebar (Inner Navigation) - Hidden on Mobile -->
    <div class="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto hidden md:block h-full">
      <div class="p-4">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
          {{ $t('bankStructure.sidebar.title') }}
        </h3>

        <!-- Navigation Items (Desktop) -->
        <nav class="space-y-1">
          <!-- Barcha xodimlar -->
          <button @click="selectItem('all', null)"
            class="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors"
            :class="selectedItem?.type === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>{{ $t('bankStructure.categories.all') }}</span>
          </button>
          <!-- Raislar (with dropdown) -->
          <div>
            <button @click="toggleSection('raislar')"
              class="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors"
              :class="activeSection === 'raislar' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{{ $t('bankStructure.categories.raislar') }}</span>
              </div>
              <svg class="w-4 h-4 transition-transform" :class="openSections.includes('raislar') ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown -->
            <div v-show="openSections.includes('raislar')" class="ml-6 mt-1 space-y-1">
              <button v-for="rais in raislar" :key="rais.id" @click="selectItem('rais', rais.id)"
                class="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors"
                :class="selectedItem?.type === 'rais' && selectedItem?.id === rais.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'">
                {{ rais.name }}
              </button>
            </div>
          </div>

          <!-- Departament boshlig'i -->
          <div>
            <button @click="toggleSection('departament')"
              class="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors"
              :class="activeSection === 'departament' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{{ $t('bankStructure.categories.departament') }}</span>
              </div>
              <svg class="w-4 h-4 transition-transform"
                :class="openSections.includes('departament') ? 'rotate-180' : ''" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown -->
            <div v-show="openSections.includes('departament')" class="ml-6 mt-1 space-y-1">
              <button v-for="dept in departamentlar" :key="dept.id" @click="selectItem('departament', dept.id)"
                class="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors"
                :class="selectedItem?.type === 'departament' && selectedItem?.id === dept.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'">
                {{ dept.name }}
              </button>
            </div>
          </div>

          <!-- Bo'lim boshlig'i -->
          <div>
            <button @click="toggleSection('bolim')"
              class="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors"
              :class="activeSection === 'bolim' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{{ $t('bankStructure.categories.bolim') }}</span>
              </div>
              <svg class="w-4 h-4 transition-transform" :class="openSections.includes('bolim') ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown -->
            <div v-show="openSections.includes('bolim')" class="ml-6 mt-1 space-y-1">
              <button v-for="bolim in bolimlar" :key="bolim.id" @click="selectItem('bolim', bolim.id)"
                class="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors"
                :class="selectedItem?.type === 'bolim' && selectedItem?.id === bolim.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'">
                {{ bolim.name }}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Mobile Header (Visible only on mobile) -->
    <div
      class="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
      <div class="flex items-center gap-2" @click="mobileSidebarOpen = !mobileSidebarOpen">
        <h2 class="font-bold text-gray-800 text-sm truncate max-w-[200px]">{{ currentTitle }}</h2>
        <svg class="w-4 h-4 text-gray-500 transition-transform" :class="mobileSidebarOpen ? 'rotate-180' : ''"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <!-- Filter Icon -->
      <button @click="mobileSidebarOpen = !mobileSidebarOpen" class="p-2 bg-gray-100 rounded-lg text-gray-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Sidebar Drawer (Overlay) -->
    <div v-if="mobileSidebarOpen" class="fixed inset-0 z-50 md:hidden flex flex-col" style="top: 110px;">
      <div class="fixed inset-0 bg-black bg-opacity-50" @click="mobileSidebarOpen = false"></div>
      <div
        class="bg-white w-full relative z-10 border-b border-gray-200 shadow-xl max-h-[70vh] overflow-y-auto animate-in slide-in-from-top duration-300">
        <div class="p-4 space-y-4">
          <div class="flex justify-between items-center border-b pb-2">
            <h3 class="font-bold text-gray-900">{{ $t('bankStructure.sidebar.title') }}</h3>
            <button @click="mobileSidebarOpen = false" class="text-gray-500 hover:text-gray-700">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Using same navigation logic for mobile -->
          <nav class="space-y-1">
            <!-- Barcha xodimlar -->
            <button @click="selectItem('all', null); mobileSidebarOpen = false"
              class="w-full flex items-center gap-2 px-3 py-3 text-sm font-medium rounded-lg transition-colors border border-gray-100"
              :class="selectedItem?.type === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'">
              <span>{{ $t('bankStructure.categories.all') }}</span>
            </button>

            <!-- Categories -->
            <div v-for="category in ['raislar', 'departament', 'bolim']" :key="category"
              class="border border-gray-100 rounded-lg overflow-hidden">
              <button @click="toggleSection(category)"
                class="w-full flex items-center justify-between px-3 py-3 text-sm font-medium bg-gray-50">
                <span>{{ $t(`bankStructure.categories.${category}`) }}</span>
                <svg class="w-4 h-4 transition-transform" :class="openSections.includes(category) ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="openSections.includes(category)" class="bg-white divide-y divide-gray-100">
                <button v-for="item in getCategoryItems(category)" :key="item.id"
                  @click="selectItem(getCategoryType(category), item.id); mobileSidebarOpen = false"
                  class="w-full text-left px-4 py-3 text-sm hover:bg-blue-50 transition-colors"
                  :class="selectedItem?.id === item.id && selectedItem?.type === getCategoryType(category) ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-600'">
                  {{ item.name }}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto h-full">
      <div class="p-6 space-y-6">

        <!-- Header (Desktop Only) -->
        <div class="hidden md:flex justify-between items-center">
          <div>
            <h2 class="text-2xl font-bold text-slate-800">{{ currentTitle }}</h2>
            <p class="text-sm text-slate-500">{{ $t('bankStructure.totalEmployees', { count: filteredEmployees.length })
              }}</p>
          </div>
        </div>
        <!-- Mobile Employee Count -->
        <div class="md:hidden mb-4">
          <p class="text-xs text-slate-500 font-medium">{{ $t('bankStructure.totalEmployees', {
            count:
              filteredEmployees.length
          }) }}</p>
        </div>

        <!-- Search -->
        <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4">
          <div class="relative flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-search absolute left-3 top-2.5 text-slate-400" aria-hidden="true">
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input v-model="searchQuery" placeholder="F.I.SH yoki Tabel raqami orqali qidirish..."
              class="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
              type="text">
          </div>
        </div>

        <!-- Employee Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="employee in filteredEmployees" :key="employee.id"
            class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                :class="employee.gender === 'female' ? 'bg-pink-50 text-pink-500' : 'bg-blue-50 text-blue-500'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-user" aria-hidden="true">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                  {{ employee.name }}
                </h3>
                <p class="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  ID: {{ employee.id }} • {{ employee.position }}
                </p>
                <p class="text-[10px] text-slate-400 flex items-center gap-1 mt-1 font-bold uppercase tracking-tighter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-map-pin text-blue-300" aria-hidden="true">
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                    </path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {{ employee.department }}
                </p>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{{
                  $t('bankStructure.status.assessmentOpen') }}</span>
              </div>
              <div class="flex gap-2">
                <button class="text-[10px] px-2 py-1 rounded font-black uppercase tracking-widest transition-all"
                  :class="employee.gender === 'female' ? 'bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'">
                  Profil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sidebar state
const sidebarCollapsed = ref(false);
const openSections = ref(['raislar']); // Default open
const selectedItem = ref({ type: 'all', id: null });
const searchQuery = ref('');

// Static data - Raislar
const raislar = ref([
  { id: 1, name: 'Bank raisi' },
  { id: 2, name: 'Birinchi o\'rinbosar' },
  { id: 3, name: 'Ikkinchi o\'rinbosar' }
]);

// Static data - Departamentlar
const departamentlar = ref([
  { id: 1, name: 'IT departamenti' },
  { id: 2, name: 'Moliya departamenti' },
  { id: 3, name: 'HR departamenti' },
  { id: 4, name: 'Xavfsizlik departamenti' }
]);

// Static data - Bo'limlar
const bolimlar = ref([
  { id: 1, name: 'Chakana kredit bo\'limi' },
  { id: 2, name: 'Korporativ bo\'lim' },
  { id: 3, name: 'Monitoring bo\'limi' }
]);

// Static employee data
const allEmployees = ref([
  {
    id: '000001',
    name: 'Tursunov Muhammadqodir Islomjon o\'g\'li',
    position: 'Bank raisi',
    department: 'Boshqaruv',
    gender: 'male',
    category: 'rais',
    categoryId: 1
  },
  {
    id: '000002',
    name: 'Karimov Jasur Akbarovich',
    position: 'Birinchi o\'rinbosar',
    department: 'Boshqaruv',
    gender: 'male',
    category: 'rais',
    categoryId: 2
  },
  {
    id: '000003',
    name: 'Abdullayev Sherzod Rustamovich',
    position: 'IT departament boshlig\'i',
    department: 'Axborot texnologiyalari',
    gender: 'male',
    category: 'departament',
    categoryId: 1
  },
  {
    id: '000004',
    name: 'Rahimova Dilnoza Azimovna',
    position: 'HR departament boshlig\'i',
    department: 'Kadrlar bo\'limi',
    gender: 'female',
    category: 'departament',
    categoryId: 3
  },
  {
    id: '000005',
    name: 'Yusupov Otabek Farhodovich',
    position: 'Mutaxassis',
    department: 'Chakana kredit amaliyotlari',
    gender: 'male',
    category: 'bolim',
    categoryId: 1
  },
  {
    id: '000006',
    name: 'Nazarova Malika Shavkatovna',
    position: 'Mutaxassis',
    department: 'Monitoring va kreditni limitlash',
    gender: 'female',
    category: 'bolim',
    categoryId: 3
  },
  {
    id: '000007',
    name: 'Ismoilov Sardor Bakhtiyorovich',
    position: 'Dasturchi',
    department: 'IT rivojlantirish markazi',
    gender: 'male',
    category: 'departament',
    categoryId: 1
  },
  {
    id: '000008',
    name: 'Xolmatova Nigora Rustamovna',
    position: 'Moliyaviy tahlilchi',
    department: 'Moliya departamenti',
    gender: 'female',
    category: 'departament',
    categoryId: 2
  },
  {
    id: '000009',
    name: 'Aliyev Bobur Akmalovich',
    position: 'Xavfsizlik mutaxassisi',
    department: 'Xavfsizlik departamenti',
    gender: 'male',
    category: 'departament',
    categoryId: 4
  },
  {
    id: '000010',
    name: 'Sharipova Zarina Karimovna',
    position: 'Korporativ menejer',
    department: 'Korporativ biznes',
    gender: 'female',
    category: 'bolim',
    categoryId: 2
  },
  {
    id: '000011',
    name: 'Mahmudov Javohir Shuhratovich',
    position: 'Yurist',
    department: 'Yuridik xizmat',
    gender: 'male',
    category: 'departament',
    categoryId: 2
  }
]);


// Mobile sidebar state
const mobileSidebarOpen = ref(false);

// Helper functions for mobile menu
const getCategoryItems = (category) => {
  if (category === 'raislar') return raislar.value;
  if (category === 'departament') return departamentlar.value;
  if (category === 'bolim') return bolimlar.value;
  return [];
};

const getCategoryType = (category) => {
  if (category === 'raislar') return 'rais';
  if (category === 'departament') return 'departament';
  if (category === 'bolim') return 'bolim';
  return '';
};

// Toggle section
const toggleSection = (section) => {
  const index = openSections.value.indexOf(section);
  if (index > -1) {
    openSections.value.splice(index, 1);
  } else {
    openSections.value.push(section);
  }
};

// Select item
const selectItem = (type, id) => {
  selectedItem.value = { type, id };
};

// Active section
const activeSection = computed(() => {
  if (selectedItem.value.type === 'rais') return 'raislar';
  if (selectedItem.value.type === 'departament') return 'departament';
  if (selectedItem.value.type === 'bolim') return 'bolim';
  return null;
});

// Current title
const currentTitle = computed(() => {
  if (selectedItem.value.type === 'all') return 'Barcha xodimlar';
  if (selectedItem.value.type === 'rais') {
    const rais = raislar.value.find(r => r.id === selectedItem.value.id);
    return rais ? rais.name : 'Raislar';
  }
  if (selectedItem.value.type === 'departament') {
    const dept = departamentlar.value.find(d => d.id === selectedItem.value.id);
    return dept ? dept.name : 'Departament';
  }
  if (selectedItem.value.type === 'bolim') {
    const bolim = bolimlar.value.find(b => b.id === selectedItem.value.id);
    return bolim ? bolim.name : 'Bo\'lim';
  }
  return 'Xodimlar bazasi';
});

// Filtered employees
const filteredEmployees = computed(() => {
  let employees = allEmployees.value;

  // Filter by selected category
  if (selectedItem.value.type !== 'all') {
    employees = employees.filter(emp =>
      emp.category === selectedItem.value.type &&
      emp.categoryId === selectedItem.value.id
    );
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    employees = employees.filter(emp =>
      emp.name.toLowerCase().includes(query) ||
      emp.id.includes(query) ||
      emp.department.toLowerCase().includes(query)
    );
  }

  return employees;
});
</script>
