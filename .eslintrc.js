module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'prefer-arrow',
    'deprecation',
  ],
  rules: {
    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    // 'linebreak-style': 'off',
    // 'react/require-default-props': 'off',
    // 'react/jsx-props-no-spreading': 'off',
    // 'react/no-array-index-key': 'off',
    // 'react/function-component-definition': 'off',

    'deprecation/deprecation': 'warn',
    'react/prop-types': 'off',
    'prettier/prettier': 'warn',
    'react/display-name': 'off',
    // 'no-ternary': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    // 'prefer-destructuring': ['warn', { object: true, array: true }],
    'prefer-arrow-callback': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-cycle': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'no-console': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: 'react-native',
            importNames: [
              'ActivityIndicator',
              'AppState',
              'Dimensions',
              'PixelRatio',
              'ScrollView',
              'Switch',
              'TextInput',
              'TouchableOpacity',
              'View',
            ],
            message: "Please import from '@ui-kit', @hooks or @theme",
          },
          // {
          //   name: '@react-navigation/native',
          //   importNames: ['useNavigation', 'useRoute'],
          //   message: "Please import from '@hooks'",
          // },
          // {
          //   name: '@expo/vector-icons',
          //   message: "Please use '@ui-kit/Icon'",
          // },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
    react: {
      version: 'detect',
    },
  },
};
