import { defineComponent, ref, defineAsyncComponent } from 'vue'
import Button from '@arco-design/web-vue/es/button'
import SystemDialog from 'system-app/dialog'
// const SystemDialog = defineAsyncComponent(() => import('system-app/dialog'))
import { APP_NAME } from '@/common/config'
import Modal from '@arco-design/web-vue/es/modal'
export default defineComponent({
  name: `/${APP_NAME}/dialog`,
  props: {},
  setup(props) {
    const onOpen = () => {
      visible.value = true
    }
    const onClose = () => {
      visible.value = false
    }
    const visible = ref<boolean>(false)
    return () => (
      <>
        <h1>跨应用弹框</h1>
        <Button type="primary" onClick={onOpen}>
          弹框
        </Button>
        <Modal title="系统弹框" visible={visible.value} onCancel={() => (visible.value = false)}>
          <SystemDialog onCancel={onClose}></SystemDialog>
        </Modal>
      </>
    )
  }
})
