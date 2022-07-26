import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const SkillSection = styled(Box)`
    padding-left: 3.4em;
    text-indent: -3.4em;
    margin-top: 3px;
`

export const MetaTitle = styled.span(({ textColor, color }) => `
    margin-right: 1em;
    background-color: ${color};
    color: ${textColor};
`)