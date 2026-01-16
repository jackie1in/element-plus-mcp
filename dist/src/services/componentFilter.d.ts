import { LLMConfig } from "./llmService";
/**
 * 生成组件
 * @param userPrompt 用户提示
 * @param llmConfig 大模型配置(可选)
 * @returns 返回组件信息、原因和代码
 */
export declare function generateComponent(userPrompt: string, llmConfig?: Partial<LLMConfig>): Promise<{
    component: string;
    reason: string;
    rawCode: string;
}>;
//# sourceMappingURL=componentFilter.d.ts.map