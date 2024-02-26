<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive :include="keepAliveStore.include">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, ref } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useKeepAliveStore } from '@/stores/useKeepAliveStore'
import { APP_NAME } from '@/common/config'
export default defineComponent({
  setup() {
    // state
    const keepAliveStore = useKeepAliveStore()
    const route = useRoute()
    const router = useRouter()
    watch(
      () => route,
      () => {
        // console.log('监听到路由变化')
        window.$wujie?.bus.$emit('sub-route-change', {
          app: `${APP_NAME}`,
          route: route
        })
      },
      {
        deep: true,
      immediate: true
      }
    )
    onMounted(() => {
      window.$wujie?.bus.$on(`${APP_NAME}-route-change`, ({ route }) => {
        // console.log(`${APP_NAME}收到主应用通知的路由跳转通知`)
        // 子应用跳转需要接收主应用通知，自行跳转
        router.push({ path: route.params.path, query: route.query })
      })
      window.$wujie?.bus.$on('tab-change', (props: { tabsAppMap: Map<string, any> }) => {
        // console.log('received-tab-change', props)
        keepAliveStore.setInclude(props.tabsAppMap)
        // console.log(keepAliveStore.include)
      })
    })
    return {
      keepAliveStore
    }
  }
})
</script>

<style scoped></style>
