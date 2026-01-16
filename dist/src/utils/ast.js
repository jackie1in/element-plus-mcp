import { parse } from '@babel/parser';
export function fixVueCode(code) {
    try {
        parse(code, { sourceType: 'module', plugins: ['typescript'] });
        return code;
    }
    catch (e) {
        return code.replace(/<([a-zA-Z\-]+)([^\/>]*)(?<!\/)>/g, '<$1$2 />');
    }
}
//# sourceMappingURL=ast.js.map