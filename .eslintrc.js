module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
      ],
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.graphql'],
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        'import/prefer-default-export': "off",
        'react/destructuring-assignment': "off",
        'react/function-component-definition': "off",
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/no-unused-vars': ['warn'],
        'arrow-body-style': 'off',
        'no-param-reassign': 'off',
        'prettier/prettier': ['warn'],
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 'off',  
        'react/require-default-props': 'off',
      },
    }
  ],
};
