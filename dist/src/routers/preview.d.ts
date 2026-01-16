import Router from "koa-router";
declare const router: Router<any, {}>;
/**
 * 生成组件预览HTML页面
 * @param code Vue组件代码
 * @returns 包含iframe的HTML页面
 */
export declare function buildHtml(code: string): string;
/**
 * 生成沙箱环境HTML
 * @param previewId 预览ID
 * @returns 沙箱环境HTML
 */
export declare function buildSandboxHtml(previewId: string): string;
export default router;
//# sourceMappingURL=preview.d.ts.map