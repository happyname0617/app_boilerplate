import { useCallback, useState, useLayoutEffect } from 'react'

const getSize = (el: HTMLElement | null) => ({
  width: (el && el.offsetWidth) || 0,
  height: (el && el.offsetHeight) || 0
})

const useComponentSize = (ref: React.RefObject<HTMLElement>) => {
  let [componentSize, setSize] = useState(
    getSize(ref ? ref.current : null)
  )

  const handleResize = useCallback(
    () => ref.current && setSize(getSize(ref.current)),
    [ref]
  )

  useLayoutEffect(
    () => {
      if (!ref.current) return
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    },
    [ref.current]
  )

  return componentSize
}

export default useComponentSize
