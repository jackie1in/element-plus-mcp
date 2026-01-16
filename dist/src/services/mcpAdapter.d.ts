import { LLMConfig } from './llmService';
/**
 * MCP适配器 - HTTP API 的简化包装层
 *
 * 注意：此类仅用于向后兼容 HTTP API 端点
 * 内部使用 GenerateComponentTool（BaseTool 模式）
 *
 * @deprecated 新代码应直接使用 GenerateComponentTool
 */
export declare class MCPAdapter {
    private generateTool;
    /**
     * 生成组件的适配方法
     * 将 HTTP API 参数转换为 GenerateComponentTool 格式
     * @param params HTTP API 传入的参数
     * @returns 返回组件生成结果
     */
    generateComponentFromMCP(params: {
        description: string;
        componentType?: string;
        stylePreference?: string;
        featuresRequired?: string[];
        llmConfig?: Partial<LLMConfig>;
    }): Promise<{
        componentName: string;
        code: string;
        previewUrl: string;
        explanation: string;
    }>;
    /**
     * 测试LLM连接的适配方法
     * @deprecated 此方法将在未来版本移除
     */
    testLLMConnection(llmConfig: Partial<LLMConfig>): Promise<{
        success: boolean;
        response: {
            message: string;
        };
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        response?: undefined;
    }>;
}
//# sourceMappingURL=mcpAdapter.d.ts.map