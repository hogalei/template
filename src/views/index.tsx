import { defineComponent, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Input from '@arco-design/web-vue/es/input'
import { APP_NAME } from '@/common/config'
import Button from '@arco-design/web-vue/es/button'

export default defineComponent({
  name: `/${APP_NAME}/index`,
  setup() {
    const route = useRoute()
    // console.log(route.query)

    return () => (
      <>
        <h1>恭喜你成功创建属于你的微应用-{APP_NAME}</h1>
        {/* 跨页面传输的id为{route.query.id} */}
      </>
    )
  }
})
