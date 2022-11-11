# use-shiki

> React hook for using Shiki syntax highlighter

[![npm](https://img.shields.io/npm/v/use-shiki)](https://www.npmjs.com/use-shiki)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/use-shiki)](https://www.npmjs.com/use-shiki)
[![NPM](https://img.shields.io/npm/l/use-shiki)](LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

```jsx
import useShiki, { setCDN } from 'use-shiki'

setCDN('https://unpkg.com/shiki/')

function App() {
  const highlighter = useShiki({ theme: 'dracula', langs: ['jsx'] })

  return (
    <code
      dangerouslySetInnerHTML={{
        __html: highlighter?.codeToHtml(
          'const [count, setCount] = useState(0)',
          {
            lang: 'jsx',
          },
        ),
      }}
    />
  )
}

export default App
```

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/use-shiki/blob/main/LICENSE)
