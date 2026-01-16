export type LLMModelType = "deepseek" | "openai" | "anthropic" | "gemini" | "custom";
export interface LLMConfig {
    modelType: LLMModelType;
    modelName?: string;
    apiUrl?: string;
    apiKey?: string;
    temperature?: number;
    maxTokens?: number;
    otherParams?: Record<string, any>;
}
/**
 * 调用LLM服务
 * @param prompt 提示语
 * @param config LLM配置，可选，默认使用deepseek
 * @returns 返回LLM响应内容
 */
export declare function callLLM(prompt: string, config?: Partial<LLMConfig>): Promise<string>;
//# sourceMappingURL=llmService.d.ts.map