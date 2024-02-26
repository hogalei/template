import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import Input from '@arco-design/web-vue/es/input'
import { APP_NAME } from '@/common/config'
import Button from '@arco-design/web-vue/es/button'

export default defineComponent({
  name: `/${APP_NAME}/jump`,
  setup() {
    const onStageJump = () => {
      window.$wujie?.props.jump({
        path: '/index',
        query: {
          id: 'abc'
        }
      })
    }

    const onInnerJump = () => {
      // console.log(window.$wujie)
      window.$wujie?.props.jump({
        path: '/backup/index',
        query: {
          id: 'abc'
        }
      })
    }

    const onOuterJump = () => {
      window.$wujie?.props.jump({
        path: '/system/index',
        query: {
          id: 'abc'
        }
      })
    }

    return () => (
      <>
        <h1>跨页面跳转</h1>
        <Button type="primary" style="margin-right:10px" onClick={onInnerJump}>
          应用内跳转(已实现)
        </Button>
        <Button type="primary" style="margin-right:10px" onClick={onStageJump}>
          跳转至主应用(已实现)
        </Button>
        <Button type="primary" onClick={onOuterJump}>
          跨应用跳转
        </Button>
      </>
    )
  }
})
