import styled from "styled-components";
import { Logo } from "../Logo";
import { InfoAndContact } from "./InfoAndContact";
import { Line } from "../Line";
import { useMediaQuery } from "react-responsive";
import { breakingPoints } from "../../utils/breakingPoints";

export function Footer() {
  const xl = useMediaQuery({ query: `(min-width: ${breakingPoints.xl})` })

  return (
    <Wrapper>
      { xl &&
        <div>
          <Logo />
          <InfoAndContact />
        </div>
      }
      {xl || <InfoAndContact />}
      <Line />
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  width: 100%;
  text-align: center;

  & > div {
    display: flex;
    justify-content: space-between;
    gap: var(--gap-1);
    align-items: center;
  }
`