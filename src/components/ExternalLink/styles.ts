import styled, { css } from 'styled-components'

interface ExternalLinkProps {
  variant?: 'iconLeft'
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  border: 0;
  background: none;
  color: ${(props) => props.theme['brand-blue']};
  font-size: ${(props) => props.theme['components-link']};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${(props) => props.theme['brand-blue']};
    transition: border-color 0.4s;
  }

  ${(props) =>
    props.variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
      cursor: pointer;
    `}
`
