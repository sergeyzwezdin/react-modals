module.exports = {
    printWidth: 160,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    arrowParens: 'always',
    filepath: '',
    requirePragma: false,
    insertPragma: false,
    parser: 'typescript',
    proseWrap: 'preserve',
    importOrder: [
        '^(react|react-(.+))$',
        '^(next|next/(.+)|next-auth|next-auth/(.+))$',
        '<THIRD_PARTY_MODULES>',
        '^@/auth/(.+)$',
        '^@/components/(.+)$',
        '^@/styles/(.+)$',
        '^@heroicons/(.+)$',
        '^@/containers/(.+)$',
        '^@/api/(.+)$',
        '^@/model/(.+)$',
        '^@/(state|state/(.+))$',
        '^@/(helpers|hooks)/(.+)$',
        '^@/(.+)$',
        '^./@(.+)$',
        '^[./]'
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ['@trivago/prettier-plugin-sort-imports']
};
