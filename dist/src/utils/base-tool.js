/**
 * MCP 工具基类
 * 提供统一的工具注册和执行接口
 */
export class BaseTool {
    /**
     * 注册工具到 MCP 服务器
     * @param server MCP 服务器实例
     */
    register(server) {
        server.tool(this.name, this.description, this.schema.shape, this.execute.bind(this));
    }
}
//# sourceMappingURL=base-tool.js.map