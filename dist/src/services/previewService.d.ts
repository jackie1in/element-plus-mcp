export declare class PreviewService {
    static instance: PreviewService;
    private codeStore;
    private currentId;
    private constructor();
    buildPreview(code: string): Promise<string>;
    private generateId;
    private storeCode;
    getCodeById(id: string): string | undefined;
}
//# sourceMappingURL=previewService.d.ts.map