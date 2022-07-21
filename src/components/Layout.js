import React from 'react'
import { Container } from '@chakra-ui/react'
const Layout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Layout
