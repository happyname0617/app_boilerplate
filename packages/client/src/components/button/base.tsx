import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const ButtonBase = styled.div`
    color: black;
    border: 1px solid #eee;
    display: inline-block;
    padding: 0.5rem;
    border-radius: 3px;
    margin: 0 0.125rem;
    cursor: pointer;
`

const Button: FunctionComponent<{}> = ({ children }) => {
  return <ButtonBase>{children}</ButtonBase>
}

export default Button
