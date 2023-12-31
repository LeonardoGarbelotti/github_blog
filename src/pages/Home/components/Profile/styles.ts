import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  margin-top: calc(0px - 5.5rem);
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`
export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-size: ${(props) => props.theme['title-title-l']};
      color: ${(props) => props.theme['base-title']};
      line-height: 130%;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 0px;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
