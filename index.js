/**
 * @file postcss plugin px to vw
 * @author hardylin <hardylin@tencent.com>
 */
const postcss = require('postcss')

module.exports = postcss.plugin('postcss-px-vw', ({ width = 750, height = 1334, toFixed = 3 } = {}) => {
    return (root, result) => {
        root.walkRules((rule) => {
            rule.walkDecls((decl) => {
                decl.value = decl.value.replace(/(\d+)px/g, (match, p1) => {
                    return `${ ((rule.parent.name == 'media' && rule.parent.params.includes('landscape') ? p1 / height : p1 / width) * 100).toFixed(toFixed).replace(/0+$/, '') }vw`
                })
            })
        })
    }
})