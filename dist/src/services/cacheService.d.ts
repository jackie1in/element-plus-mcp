/**
 * 缓存服务
 * 用于缓存组件生成结果，提高响应速度，减少 LLM API 调用
 */
export declare class CacheService<T = any> {
    private cache;
    private maxSize;
    private ttl;
    constructor(maxSize?: number, ttl?: number);
    /**
     * 设置缓存
     */
    set(key: string, value: T): void;
    /**
     * 获取缓存
     */
    get(key: string): T | undefined;
    /**
     * 删除缓存
     */
    delete(key: string): boolean;
    /**
     * 清空所有缓存
     */
    clear(): void;
    /**
     * 获取缓存大小
     */
    size(): number;
    /**
     * 清理过期缓存
     */
    cleanup(): void;
    /**
     * 生成缓存键
     */
    static generateKey(params: Record<string, any>): string;
}
export declare const componentCache: CacheService<{
    componentName: string;
    code: string;
    previewUrl: string;
    explanation: string;
}>;
//# sourceMappingURL=cacheService.d.ts.map