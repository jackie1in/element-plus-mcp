import { z } from "zod";
import { BaseTool, McpToolResult } from "../utils/base-tool.js";
/**
 * Element Plus 组件生成工具
 * 基于 BaseTool 抽象类实现
 */
export declare class GenerateComponentTool extends BaseTool {
    name: string;
    description: string;
    schema: z.ZodObject<{
        description: z.ZodString;
        componentType: z.ZodOptional<z.ZodString>;
        llmConfig: z.ZodOptional<z.ZodObject<{
            modelType: z.ZodOptional<z.ZodEnum<{
                deepseek: "deepseek";
                openai: "openai";
                anthropic: "anthropic";
                gemini: "gemini";
                custom: "custom";
            }>>;
            modelName: z.ZodOptional<z.ZodString>;
            temperature: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    execute({ description, componentType, llmConfig, }: z.infer<typeof this.schema>): Promise<McpToolResult>;
}
//# sourceMappingURL=generate-component-tool.d.ts.map