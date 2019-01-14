import React, { FunctionComponent, useRef } from 'react'
import styled from 'styled-components'

import useWindowSize from '../../utils/useWindowSize'
import useComponentSize from '../../utils/useComponentSize'
import Base from './base'
import Pusher from './pusher'

const PositionBottom = styled(Base)`
    top: 0;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid #e8e8e8;
`

const mobileMenu: FunctionComponent<{}> = ({ children }) => {
  const { innerWidth } = useWindowSize()
  const ref = useRef(null)
  const size = useComponentSize(ref)
  const { height } = size

  if (innerWidth <= 720) return null

  return (
    <>
      <PositionBottom ref={ref}>
        { children }
      </PositionBottom>
      <Pusher height={height} />
    </>
  )
}

export default mobileMenu
