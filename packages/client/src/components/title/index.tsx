import styled from 'styled-components'
import colors from '../../layout/colors.scss'

const Title = styled.h1`
    color: ${colors.textColorSecondary};
    font-family: sans-serif;
`

export const Title1 = Title
export const Title2 = Title.withComponent('h2')
export const Title3 = Title.withComponent('h3')
export const Title4 = Title.withComponent('h4')
export const Title5 = Title.withComponent('h5')
