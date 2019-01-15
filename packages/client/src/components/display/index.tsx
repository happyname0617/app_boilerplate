import React from 'react'
import styled from 'styled-components'

export const D = styled.div`
  color: #323232;
  lineheight: 1rem;
  display: inline-block;
  font-family: sans-serif;
`

export const D1 = D
export const D2 = styled(D)`
  font-size: 0.8rem;
`
