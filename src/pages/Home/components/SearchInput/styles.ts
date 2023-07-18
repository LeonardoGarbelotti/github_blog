import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    h3 {
      font-size: ${(props) => props.theme['title-title-s']};
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: ${(props) => props.theme['text-text-s']};
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};
    transition: 0.4s;

    &:focus {
      border-color: ${(props) => props.theme['brand-blue']};
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
