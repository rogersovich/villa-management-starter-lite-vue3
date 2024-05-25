<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
  createCalendar,
  viewMonthAgenda,
  viewMonthGrid,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import moment from 'moment'
import type { TCalendarEvent } from '~/types/calendarTypes'

const props = defineProps<{ events?: TCalendarEvent[] }>()

const today = ref(moment().format('YYYY-MM-DD'))
const calendarApp = createCalendar({
  locale: 'id-ID',
  defaultView: viewMonthGrid.name,
  views: [viewMonthGrid, viewMonthAgenda],
  selectedDate: today.value,
  plugins: [createEventModalPlugin()],
  events: [
    {
      id: 1,
      title: 'Survey - Kang Asep',
      start: '2024-05-19 13:00',
      end: '2024-05-19 15:00',
      location: 'Cisarua',
      calendarId: 'survey',
    },
    {
      id: 2,
      title: 'Booking - Kang Rahmat',
      start: '2024-05-20 12:00',
      end: '2024-05-20 13:00',
      location: 'Cisarua',
      calendarId: 'booking',
    },
    {
      id: 3,
      title: 'Terisi - Kang Rafli',
      start: '2024-05-15 14:00',
      end: '2024-05-16 14:00',
      location: 'Cisarua',
      calendarId: 'full',
    },
  ],
  calendars: calendarColorConfig(),
})

onMounted(() => {
  console.log(props)
})
</script>

<template>
  <div class="border-b-1 border-zinc-200 py-[2.5em]">
    <div class="mb-6 fcb">
      <div class="text-[1.5rem] font-bold">
        Kalender
      </div>
    </div>
    <div>
      <ScheduleXCalendar :calendar-app="calendarApp" />
    </div>
  </div>
</template>

<style scoped>
.sx-vue-calendar-wrapper {
  width: 100%;
  height: 600px;
  max-height: 80vh;
}

:deep(.sx__month-grid-event) {
  cursor: pointer !important;
}

:deep(.sx__chevron-wrapper:hover) {
  background: #fed7aa;
}

:deep(.sx__view-selection-item.is-selected) {
  background: #ffedd5;
}

:deep(.sx__date-input--active .sx__date-input-label) {
  color: #fb923c;
}

:deep(.sx__date-input--active .sx__date-input) {
  border-color: #fb923c;
  outline: #fb923c;
}

:deep(
    .sx__view-selection-item.is-selected:hover,
    .sx__view-selection-item.is-selected:focus
  ) {
  background: #ffedd5;
  color: #fb923c;
}

:deep(.sx__date-picker__day--selected) {
  background: #ffedd5;
  color: #fb923c;
}

:deep(.sx__month-grid-day__header-date.sx__is-today) {
  background: #fb923c;
}
</style>
