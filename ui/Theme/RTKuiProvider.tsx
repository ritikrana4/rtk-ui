import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

export interface RTKuiProvider {
    children?: React.ReactNode
}
export const RTKuiProvider : React.FC<RTKuiProvider> = ({
    children,
    theme,
})=>{
    return(
        <ThemeProvider theme={theme}>
            <>
            {children}
            </>
        </ThemeProvider>
    )
}