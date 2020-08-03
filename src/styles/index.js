import styled from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const Page = styled.section`
  margin: 61px 0 0 0;
  padding: 0 1rem;
  @media ${device.mobileS} {
    padding: 5% 1rem 0 1rem;
  }
  @media ${device.mobileM} {
    padding: 5% 2rem 0 2rem;
  }
  @media ${device.tablet} {
    padding: 5% 0 0 10%;
  }
`

export const Button = styled.button`
  background: ${props => props.primary ? '#2a9df4' : '#ffffff'};
  color: ${props => props.primary ? '#ff0000' : '#2a9df4'};
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border: 2px solid #2a9df4;
  border-radius: 10px;
`;

export const LabeledInput = styled.div`
  display: flex;
  flex-flow: ${props => props.horizontal ? 'row' : 'column'} ${props => props.wrap ? 'wrap' : 'nowrap'};
  margin-bottom: 1rem;
  & label {
    letter-spacing: 0.18rem;
    margin-bottom: 0.3rem;
  }
  @media ${device.mobileS} {
    max-width: 100%;
  }
`

export const Input = styled.input`
  height: ${prop => prop.theme.height}
  font-size: 1rem;
  line-height: 0;
  padding: 0.5rem 0.75rem;
  border: 2px solid ${props => props.primary ? '#2a9df4' : '#eeeeee'};
  border-radius: 0.15rem;
`

export const CreateForm = styled.article`
  padding: 10%;
`

export const CardHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  & p {
    margin: 0;
    font-size: 0.9rem;
    & span {
      margin: 0 1rem 0 0;
      font-weight: 700;

    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.4rem;
  & div {
    font-size: 0.75rem;
    margin-right: 0.25rem;
    padding: 0.1rem 0.3rem;
    background: white;
    border: 1px solid #444444;
    border-radius: 3px;
    color: #444444;
  }
`

export const CardHolder = styled.div`
  background: #ffffff;
  margin-bottom: 5%;
  padding: 0.5rem 1rem;
  border-left: 10px solid ${props => props.theme.priority};
  border-radius: 10px;
  @media ${device.mobileS} {
    max-width: 100%;
  }
`;

CardHolder.defaultProps = {
  theme: {
    priority: {
      priority: '#ff0000'
    }
  }
}

export const TaskListHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  & p {
    margin: 0;
  }
  & h4 {
    margin: 0;
  }
`;

export const TaskListStyle = styled.div`
  width: 100%;
  background: #9f9fff;
  padding: 0.5rem 1rem;
  @media ${device.mobileS} {
    max-width: 100%;
    margin-bottom: 5%;
  }
  @media ${device.tablet} {
    max-width: 40%;
  }
  @media ${device.laptop} {
    max-width: 25%;
  }
`;

export const TaskListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10%;
`;

export const NavBarStyle = styled.div`
  position: fixed;
  top:0;
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 1rem 2rem;
  background: #003965;
  color: #efefef;
  & div {
    display: flex;
    justify-content: right;
    width: 100%;
    margin-right: 4rem;
    & a {
      display:flex;
      justify-content: center;
      items-align: center;
      text-decoration: none;
      margin-right: 1rem;
      & p {
        color: white;
      }
    }
  }
  @media ${device.tablet} {
    padding: 1rem 5rem 1rem 0rem;
  }
`

export const MobileNavBar = styled.div``
