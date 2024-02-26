/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  $wujie: {
    props: any
    bus: {
      $on: (eventName: string, props: any) => void
      $emit: (eventName: string, props: any) => void
    }
  }
}
