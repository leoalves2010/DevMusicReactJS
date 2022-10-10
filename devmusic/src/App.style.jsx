import styled from "@emotion/styled/macro";

export const Header = styled("header")`
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.divider};
    padding: 8px 0;

    & h1 {
        margin: 0;
    }

    & span {
        color: ${({ theme }) => theme.primary};
    }
`;
