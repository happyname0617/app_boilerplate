import styled from 'styled-components'

interface IProps {
    height: number
}

const Pusher = styled.div(({ height }: IProps) => ({
  height: `${height}px`,
  width: `100%`,
  boxSizing: 'border-box'
}))

export default Pusher
