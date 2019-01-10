import React, { FunctionComponent } from 'react'
import styled from 'styled-components' 

import useWindowSize from '../../utils/useWindowSize';

const MenuBase = styled.div`
    background: white;
    padding: 1rem;
    color: black;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
`
const MenuMobile = styled(MenuBase)`bottom: 0;`
const MenuDesktop = styled(MenuBase)`top: 0;`

const MainMenu: FunctionComponent<{}>  = () => {
    let windowdata = useWindowSize()

    return windowdata.innerWidth <= 720 
        ? <MenuMobile>Mobile MainMenu Placeholder</MenuMobile>
        : <MenuDesktop>Desktop MainMenu Placeholder</MenuDesktop>
}

export default MainMenu