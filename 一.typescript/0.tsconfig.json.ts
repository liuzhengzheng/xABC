// # 配置
{
  const config = {
    // 编辑器配置
    "compilerOptions": {
      "baseUrl": ".",
      "outDir": "build/dist", // 输出js源码目录
      "module": "esNext",
      "target": "es3",
      "lib": ["esnext", "dom"],
      "sourceMap": true,
      "allowJs": true,
      "jsx": "react",
      "moduleResolution": "node",
      "noEmitHelpers": true,
      "rootDir": ".",
      "experimentalDecorators": true, // 装饰器
      "forceConsistentCasingInFileNames": true,
      "noImplicitReturns": true,
      "noImplicitThis": true,
      "noImplicitAny": true,
      "strictNullChecks": true,
      "suppressImplicitAnyIndexErrors": true,
      "noUnusedLocals": false,
      "importHelpers": true,
      "allowSyntheticDefaultImports": true,
      "typeRoots": ["node_modules/@types"],
      "traceResolution": false,
      "skipLibCheck": true,
      "paths": {
        "tslib": ["./node_modules/tslib/tslib"]
      }
    },
    // 排除
    "exclude": [
      "node_modules",
      "build",
      "scripts",
      "acceptance-tests",
      "webpack",
      "jest"
    ]
  }
}