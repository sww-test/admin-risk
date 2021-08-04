export {}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // this.代码补全配置
    $request: MyRequest.request,
    $baseTableHeight: (formType?: number) => number,
    $linkTo: (path: string, query?: any) => void,
    $openDocument: (src: string) => void,
    $image: (src: string) => void,
    $openBlank: (src: string) => void
  }
}
