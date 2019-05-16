const types = require('babel-types');

module.exports = function() {
  return {
    name: "babel-plugin-library",
    visitor: {
      ImportDeclaration(path, state) {
        const specifiers = path.node.specifiers;
        const source = path.node.source;
        const libraryName = source.value;

        // 判断是否是需要按需加载的库
        const isBelong = state.opts.libraryName === libraryName;
        // 判断是否是 默认导入
        const isDefault = types.isImportDefaultSpecifier(specifiers[0]);
        // 判断是否是 * as 方式导入
        const isAll = types.isImportNamespaceSpecifier(specifiers[0]);

        if (isBelong && !isDefault && !isAll) {
          const newImports = specifiers.map(specifier => {
            const stringLiteral = types.stringLiteral(`${libraryName}/lib/${specifier.local.name}`);
            const newSpecifier = types.importDefaultSpecifier(specifier.local);

            return types.importDeclaration([newSpecifier], stringLiteral);
          })
          path.replaceWithMultiple(newImports);
        }
      }
    }
  };
};
