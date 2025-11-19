<template>
  <div class="p-4 md:p-8">
    <!-- Header -->
    <div class="mb-6 md:mb-8">
      <h1 class="text-2xl md:text-3xl mb-2">Profil</h1>
      <p class="text-gray-600">Shaxsiy ma'lumotlar va sozlamalar</p>
    </div>

    <div class="grid lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
      <!-- Profile Card -->
      <div class="p-4 md:p-6 border-0 shadow-md rounded-lg lg:col-span-1">
        <div class="text-center mb-4 md:mb-6">
          <div class="relative inline-block mb-4">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-2xl font-semibold">
              AA
            </div>
            <button class="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
              <UploadIcon class="w-4 h-4" />
            </button>
          </div>
          <h2 class="text-2xl mb-1">Aziz Aliyev</h2>
          <p class="text-gray-600 mb-3">Frontend Developer</p>
          <span class="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Middle Level</span>
        </div>

        <div class="space-y-3 mb-6">
          <div class="flex items-center gap-3 text-sm text-gray-600">
            <MailIcon class="w-4 h-4" />
            <span>aziz.aliyev@example.com</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-600">
            <MapPinIcon class="w-4 h-4" />
            <span>Tashkent, Uzbekistan</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-600">
            <BriefcaseIcon class="w-4 h-4" />
            <span>3+ years experience</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-600">
            <CalendarIcon class="w-4 h-4" />
            <span>Joined Sep 2025</span>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="mb-3">Progress to Senior</h3>
          <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div class="bg-blue-600 h-3 rounded-full" style="width: 68%"></div>
          </div>
          <p class="text-sm text-gray-600">32% to next level</p>
        </div>

        <button @click="isEditing = !isEditing" class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
          <SettingsIcon class="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <!-- Stats Grid -->
      <div class="lg:col-span-2 grid md:grid-cols-2 gap-4">
        <div v-for="(stat, index) in stats" :key="index" class="p-6 border-0 shadow-md rounded-lg">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <component :is="stat.icon" :class="stat.iconColor" class="w-5 h-5" />
            </div>
            <div>
              <p class="text-sm text-gray-600">{{ stat.label }}</p>
              <div class="text-2xl">{{ stat.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="w-full">
      <div class="grid grid-cols-4 mb-8 bg-gray-100 rounded-lg p-1">
        <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            :class="[
            'flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors',
            activeTab === tab.value ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
          ]"
        >
          <component :is="tab.icon" class="w-4 h-4" />
          {{ tab.label }}
        </button>
      </div>

      <!-- Profile Tab -->
      <div v-if="activeTab === 'profile'" class="p-8 border-0 shadow-md rounded-lg">
        <h2 class="text-2xl mb-6">Personal Information</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="text-sm font-medium mb-2 block">First Name</label>
            <input
                v-model="profileData.firstName"
                :disabled="!isEditing"
                :class="['w-full px-3 py-2 border rounded-lg', !isEditing ? 'bg-gray-50' : '']"
            />
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Last Name</label>
            <input
                v-model="profileData.lastName"
                :disabled="!isEditing"
                :class="['w-full px-3 py-2 border rounded-lg', !isEditing ? 'bg-gray-50' : '']"
            />
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Email</label>
            <input
                v-model="profileData.email"
                type="email"
                :disabled="!isEditing"
                :class="['w-full px-3 py-2 border rounded-lg', !isEditing ? 'bg-gray-50' : '']"
            />
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Phone</label>
            <input
                v-model="profileData.phone"
                :disabled="!isEditing"
                :class="['w-full px-3 py-2 border rounded-lg', !isEditing ? 'bg-gray-50' : '']"
            />
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Location</label>
            <input
                v-model="profileData.location"
                :disabled="!isEditing"
                :class="['w-full px-3 py-2 border rounded-lg', !isEditing ? 'bg-gray-50' : '']"
            />
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Current Position</label>
            <input
                v-model="profileData.position"
                :disabled="!isEditing"
                :class="['w-full px-3 py-2 border rounded-lg', !isEditing ? 'bg-gray-50' : '']"
            />
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Years of Experience</label>
            <select
                v-model="profileData.experience"
                :disabled="!isEditing"
                :class="['w-full px-3 py-2 border rounded-lg', !isEditing ? 'bg-gray-50' : '']"
            >
              <option value="0-1">0-1 years</option>
              <option value="1-2">1-2 years</option>
              <option value="2-3">2-3 years</option>
              <option value="3-4">3-4 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Current Level</label>
            <select
                v-model="profileData.level"
                :disabled="!isEditing"
                :class="['w-full px-3 py-2 border rounded-lg', !isEditing ? 'bg-gray-50' : '']"
            >
              <option value="junior">Junior</option>
              <option value="middle">Middle</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>
          </div>
        </div>

        <div class="mt-6">
          <label class="text-sm font-medium mb-2 block">Bio</label>
          <textarea
              v-model="profileData.bio"
              :disabled="!isEditing"
              class="w-full min-h-[120px] px-3 py-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div v-if="isEditing" class="flex gap-3 mt-6">
          <button @click="saveProfile" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
          <button @click="isEditing = false" class="px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
        </div>
      </div>

      <!-- Achievements Tab -->
      <div v-if="activeTab === 'achievements'" class="p-8 border-0 shadow-md rounded-lg">
        <h2 class="text-2xl mb-6">Your Achievements</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div
              v-for="(achievement, index) in achievements"
              :key="index"
              :class="[
              'p-6 rounded-2xl border-2 transition-all',
              achievement.earned
                ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300'
                : 'bg-gray-50 border-gray-200'
            ]"
          >
            <div :class="['text-5xl mb-3', !achievement.earned && 'grayscale opacity-40']">
              {{ achievement.icon }}
            </div>
            <h3 :class="['mb-2', achievement.earned ? 'text-gray-900' : 'text-gray-400']">
              {{ achievement.title }}
            </h3>
            <div v-if="achievement.earned && achievement.date" class="flex items-center gap-2 text-sm text-gray-600">
              <CalendarIcon class="w-4 h-4" />
              <span>{{ achievement.date }}</span>
            </div>
            <p v-if="!achievement.earned" class="text-sm text-gray-500">Locked</p>
          </div>
        </div>
      </div>

      <!-- Subscription Tab -->
      <div v-if="activeTab === 'subscription'" class="space-y-6">
        <!-- Current Plan -->
        <div class="p-8 border-0 shadow-md rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-2xl mb-1">Current Plan: Free</h2>
              <p class="text-blue-100">Upgrade to unlock all features</p>
            </div>
            <CrownIcon class="w-12 h-12 text-yellow-300" />
          </div>
          <div class="flex items-center gap-4">
            <button class="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold">
              Upgrade Now
            </button>
            <button class="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10">
              Compare Plans
            </button>
          </div>
        </div>

        <!-- Pricing Plans -->
        <div class="grid md:grid-cols-3 gap-6">
          <div
              v-for="plan in pricingPlans"
              :key="plan.id"
              :class="[
              'p-6 border-2 transition-all rounded-lg',
              plan.popular
                ? 'border-blue-600 shadow-xl scale-105'
                : 'border-gray-200 shadow-md'
            ]"
          >
            <span v-if="plan.popular" class="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
              Most Popular
            </span>
            <h3 class="text-2xl mb-2">{{ plan.name }}</h3>
            <div class="mb-4">
              <span class="text-4xl">{{ plan.price }}</span>
              <span class="text-gray-600 ml-2">{{ plan.period }}</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li v-for="(feature, index) in plan.features" :key="index" class="flex items-start gap-2">
                <CheckIcon class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span class="text-sm">{{ feature }}</span>
              </li>
            </ul>
            <button
                :class="[
                'w-full px-4 py-2 rounded-lg',
                plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border hover:bg-gray-50'
              ]"
            >
              {{ plan.id === 'free' ? 'Current Plan' : 'Upgrade' }}
            </button>
          </div>
        </div>

        <!-- Payment Methods -->
        <div class="p-8 border-0 shadow-md rounded-lg">
          <h2 class="text-2xl mb-6">Payment Methods</h2>
          <div class="grid md:grid-cols-4 gap-4 mb-6">
            <button
                v-for="method in paymentMethods"
                :key="method"
                class="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-600 transition-colors"
            >
              <div class="text-center">
                <CreditCardIcon class="w-8 h-8 mx-auto mb-2 text-gray-600" />
                <span>{{ method }}</span>
              </div>
            </button>
          </div>
          <p class="text-sm text-gray-600">
            All payments are secure and encrypted. You can cancel your subscription at any time.
          </p>
        </div>

        <!-- Payment History -->
        <div class="p-8 border-0 shadow-md rounded-lg">
          <h2 class="text-2xl mb-6">Payment History</h2>
          <div class="space-y-3">
            <div v-for="payment in paymentHistory" :key="payment.id" class="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCardIcon class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div class="mb-1">{{ payment.plan }} Plan</div>
                  <div class="flex items-center gap-3 text-sm text-gray-600">
                    <CalendarIcon class="w-4 h-4" />
                    <span>{{ payment.date }}</span>
                    <span>•</span>
                    <span>{{ payment.method }}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="text-right">
                  <div class="text-lg">{{ payment.amount }}</div>
                  <span :class="['inline-block px-2 py-1 text-xs rounded-full', payment.status === 'Paid' ? 'bg-green-600 text-white' : 'bg-gray-600 text-white']">
                    {{ payment.status }}
                  </span>
                </div>
                <button class="p-2 hover:bg-gray-100 rounded-lg">
                  <DownloadIcon class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Settings Tab -->
      <div v-if="activeTab === 'settings'" class="space-y-6">
        <div class="p-8 border-0 shadow-md rounded-lg">
          <h2 class="text-2xl mb-6">Account Settings</h2>
          <div class="space-y-6">
            <div>
              <label class="text-sm font-medium mb-2 block">Current Password</label>
              <input type="password" placeholder="Enter current password" class="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label class="text-sm font-medium mb-2 block">New Password</label>
              <input type="password" placeholder="Enter new password" class="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label class="text-sm font-medium mb-2 block">Confirm Password</label>
              <input type="password" placeholder="Confirm new password" class="w-full px-3 py-2 border rounded-lg" />
            </div>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update Password</button>
          </div>
        </div>

        <div class="p-8 border-0 shadow-md rounded-lg">
          <h2 class="text-2xl mb-6">Notification Preferences</h2>
          <div class="space-y-4">
            <div v-for="(item, index) in notifications" :key="index" class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <div class="mb-1">{{ item.label }}</div>
                <p class="text-sm text-gray-600">{{ item.desc }}</p>
              </div>
              <input type="checkbox" :checked="item.checked" class="w-5 h-5" />
            </div>
          </div>
        </div>

        <div class="p-8 border-0 shadow-md rounded-lg">
          <h2 class="text-2xl mb-6 text-red-600">Danger Zone</h2>
          <div class="space-y-4">
            <div class="p-4 border-2 border-red-200 rounded-xl">
              <h3 class="mb-2">Export Data</h3>
              <p class="text-sm text-gray-600 mb-4">
                Download all your data including resume, notes, and progress reports
              </p>
              <button class="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <DownloadIcon class="w-4 h-4" />
                Export Data
              </button>
            </div>
            <div class="p-4 border-2 border-red-200 rounded-xl">
              <h3 class="mb-2 text-red-600">Delete Account</h3>
              <p class="text-sm text-gray-600 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  User as UserIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Briefcase as BriefcaseIcon,
  Award as AwardIcon,
  Clock as ClockIcon,
  TrendingUp as TrendingUpIcon,
  Target as TargetIcon,
  Zap as ZapIcon,
  CreditCard as CreditCardIcon,
  Calendar as CalendarIcon,
  Download as DownloadIcon,
  Settings as SettingsIcon,
  Upload as UploadIcon,
  Crown as CrownIcon,
  Check as CheckIcon
} from 'lucide-vue-next';

const activeTab = ref('profile');
const isEditing = ref(false);
const selectedPlan = ref('free');

const profileData = ref({
  firstName: 'Aziz',
  lastName: 'Aliyev',
  email: 'aziz.aliyev@example.com',
  phone: '+998 90 123 45 67',
  location: 'Tashkent, Uzbekistan',
  position: 'Frontend Developer',
  experience: '3-4',
  level: 'middle',
  bio: 'Passionate frontend developer with 3+ years of experience building modern web applications. Specialized in React, TypeScript, and Next.js.'
});

const tabs = ref([
  { value: 'profile', label: 'Profile', icon: UserIcon },
  { value: 'achievements', label: 'Achievements', icon: AwardIcon },
  { value: 'subscription', label: 'Subscription', icon: CreditCardIcon },
  { value: 'settings', label: 'Settings', icon: SettingsIcon }
]);

const stats = ref([
  { label: 'Current Level', value: 'Middle Developer', icon: AwardIcon, iconColor: 'text-blue-600' },
  { label: 'Total XP', value: '2,450', icon: TrendingUpIcon, iconColor: 'text-green-600' },
  { label: 'Completion Rate', value: '68%', icon: TargetIcon, iconColor: 'text-purple-600' },
  { label: 'Days Active', value: '87', icon: CalendarIcon, iconColor: 'text-orange-600' }
]);

const achievements = ref([
  { title: 'First Steps', icon: '🎯', earned: true, date: '2025-09-15' },
  { title: 'Week Streak', icon: '🔥', earned: true, date: '2025-10-01' },
  { title: 'Test Master', icon: '📝', earned: true, date: '2025-10-20' },
  { title: 'Code Ninja', icon: '💻', earned: false },
  { title: 'Interview Pro', icon: '🎤', earned: false },
  { title: 'Senior Path', icon: '🏆', earned: false }
]);

const pricingPlans = ref([
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Resume audit',
      'Basic dashboard',
      '2 mock interviews/month',
      '5 skill tests/month',
      'Community access'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29.99',
    period: 'per month',
    popular: true,
    features: [
      'Everything in Free',
      'Unlimited mock interviews',
      'Unlimited skill tests',
      'Advanced analytics',
      'Priority support',
      'Career coaching',
      'Resume builder',
      'Interview prep materials'
    ]
  },
  {
    id: 'team',
    name: 'Team',
    price: '$99.99',
    period: 'per month (up to 10 users)',
    features: [
      'Everything in Pro',
      'Team management dashboard',
      'Skill gap analysis',
      'Custom learning paths',
      'Dedicated account manager',
      'Custom integrations',
      'Priority onboarding'
    ]
  }
]);

const paymentMethods = ref(['Stripe', 'Uzum', 'Payme', 'Click']);

const paymentHistory = ref([
  { id: 1, date: '2025-11-01', amount: '$29.99', plan: 'Pro', status: 'Paid', method: 'Stripe' },
  { id: 2, date: '2025-10-01', amount: '$29.99', plan: 'Pro', status: 'Paid', method: 'Stripe' },
  { id: 3, date: '2025-09-01', amount: '$29.99', plan: 'Pro', status: 'Paid', method: 'Uzum' },
  { id: 4, date: '2025-08-01', amount: '$29.99', plan: 'Pro', status: 'Paid', method: 'Payme' },
  { id: 5, date: '2025-07-01', amount: '$0.00', plan: 'Free', status: 'Free', method: '-' }
]);

const notifications = ref([
  { label: 'Email notifications', desc: 'Receive email updates about your progress', checked: true },
  { label: 'Weekly reports', desc: 'Get weekly summary of your activities', checked: true },
  { label: 'Job alerts', desc: 'Notify me about matching job opportunities', checked: false },
  { label: 'Interview reminders', desc: 'Remind me about upcoming mock interviews', checked: true }
]);

const saveProfile = () => {
  isEditing.value = false;
  // Save logic here
};
</script>

<style scoped>
input:disabled,
textarea:disabled,
select:disabled {
  cursor: not-allowed;
}

.grayscale {
  filter: grayscale(100%);
}
</style>