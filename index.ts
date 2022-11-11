import { useState } from 'react'
import { getHighlighter, Highlighter, HighlighterOptions } from 'shiki'

const useShiki = (options: HighlighterOptions = {}) => {
  const [highlighter, setHighlighter] = useState<Highlighter>()
  const [shouldFetch, setShouldFetch] = useState<boolean>(true)

  if (shouldFetch) {
    setShouldFetch(false)
    getHighlighter(options).then(setHighlighter)
  }

  return highlighter
}

export * from 'shiki'

export default useShiki
