import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { APP_NAME } from '@/common/config'

export const useKeepAliveStore = defineStore('keepAlive', () => {
  // state
  const include = ref<string[]>([])

  // getters

  // actions
  const setInclude = (tabsAppMap: Map<string, any>) => {
    // console.log('tabsAppMap', tabsAppMap)
    include.value = tabsAppMap
      .get(`${APP_NAME}`)
      .map((tab: { key: string; title: string }) => tab.key)
    // console.log(include.value)
  }

  return { include, setInclude }
})
