#!/usr/bin/env node

/**
 * 构建后处理脚本
 * 1. 确保 start-mcp.js 有执行权限
 * 2. 复制 data 目录到 dist
 */

import { chmod, copyFile, mkdir, readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

async function copyDirectory(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src);

  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    const entryStat = await stat(srcPath);

    if (entryStat.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  try {
    // 1. 设置 start-mcp.js 执行权限
    const startMcpPath = join(projectRoot, 'dist', 'start-mcp.js');
    await chmod(startMcpPath, 0o755);
    console.log('✅ 已设置 start-mcp.js 执行权限');

    // 2. 复制 data 目录
    const dataSourcePath = join(projectRoot, 'data');
    const dataDestPath = join(projectRoot, 'dist', 'data');
    
    try {
      await copyDirectory(dataSourcePath, dataDestPath);
      console.log('✅ 已复制 data 目录到 dist');
    } catch (error) {
      console.warn('⚠️  复制 data 目录失败:', error.message);
    }

    console.log('🎉 构建后处理完成');
  } catch (error) {
    console.error('❌ 构建后处理失败:', error);
    process.exit(1);
  }
}

main();
