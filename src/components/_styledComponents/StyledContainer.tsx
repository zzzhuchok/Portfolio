import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${(props) => props.theme.container?.maxWidth};
  padding-inline: ${(props) => props.theme.container?.paddingX};
  margin-inline: auto;
`
