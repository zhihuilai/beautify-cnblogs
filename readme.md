# todo
beautify-cnbologs\node_modules\art-template\lib\compile\runtime.js 中的 
detectNode bug 要等 art-template 修复了重新 install 验证


# install
1. 安装 windows-build-tools
```
npm --add-python-to-path='true' --debug install --global windows-build-tools
```
项目用到了 node-sass 库，node-sass 库在执行 npm install 时，依赖 python 进行编译，
所以我们需要先在全局安装 windows-build-tools
