export class PreviewService {
    static instance = new PreviewService();
    codeStore;
    currentId;
    constructor() {
        this.codeStore = new Map();
        this.currentId = 0;
        this.codeStore.set("0", `<template>
  <div>
    <el-input
      v-model="searchText"
      placeholder="请输入搜索内容"
      clearable
      @input="handleSearch"
    >
      <template #prefix>
        <el-icon><search /></el-icon>
      </template>
    </el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const searchText = ref('');
const handleSearch = () => {
  console.log('搜索:', searchText.value);
};
</script>`);
    }
    async buildPreview(code) {
        const id = this.generateId();
        this.storeCode(id, code);
        return `http://localhost:3000/api/preview/get/${id}`;
    }
    generateId() {
        return (this.currentId++).toString();
    }
    storeCode(id, code) {
        this.codeStore.set(id, code);
    }
    getCodeById(id) {
        console.log("codeStore", this.codeStore.size);
        return this.codeStore.get(id);
    }
}
//# sourceMappingURL=previewService.js.map