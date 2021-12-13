// const plugin = require('tailwindcss/plugin')
const selectorParser = require('postcss-selector-parser')

module.exports = () => {

  const newVariant = (pseudoClass) => ({modifySelectors, separator}) => {
    modifySelectors(({ selector }) => selectorParser((selectors) => {
      selectors.walkClasses((classNode) => {
        classNode.value = `not-shown-${pseudoClass}${separator}${classNode.value}`
        classNode.parent.insertAfter(classNode, selectorParser.pseudo({ value: `:not(:placeholder-shown):${pseudoClass}` }))
      })
    }).processSync(selector))
  }

  const newVariantCombines = (name, pseudoClasses) => ({modifySelectors, separator}) => {
    modifySelectors(({ selector }) => selectorParser((selectors) => {
      const clonedSelectors = selectors.clone()
      const selectorsArr = [selectors, clonedSelectors]
      selectorsArr.forEach((sel, i) => {
        sel.walkClasses((classNode) => {
          classNode.value = `not-shown-${name}${separator}${classNode.value}`
          classNode.parent.insertAfter(classNode, selectorParser.pseudo({ value: `:not(:placeholder-shown):${pseudoClasses[i]}` }))
        })
      })
      selectors.append(clonedSelectors)
    }).processSync(selector))
  }

  return ({ addVariant, e }) => {
    addVariant('not-placeholder-shown', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(
          `not-placeholder-shown${separator}${className}`
        )}:not(:placeholder-shown)`
      })
    })

    addVariant('not-shown-hover', newVariant('hover'))
    addVariant('not-shown-focus', newVariant('focus'))
    addVariant('not-shown-disabled', newVariant('disabled'))
    addVariant('not-shown-hocus', newVariantCombines('hocus', ['focus', 'hover']))
    addVariant('not-shown-hocus-disabled', newVariantCombines('hocus[disabled]', ['focus', 'hover']))
  }
}

// module.exports = {
//   plugins: [
//     plugin(function({ addVariant, e }) {

//     })
//   ]
// }
