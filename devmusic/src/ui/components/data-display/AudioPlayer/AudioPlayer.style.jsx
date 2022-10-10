import styled from "@emotion/styled/macro";

export const PlayerContainer = styled("div")`
    border-top: 1px solid ${({ theme }) => theme.divider};
    background-color: ${({ theme }) => theme.backgroundPaper};
    padding: 16px;
`;
export const ButtonContainer = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const PlayButton = styled("button")`
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    font-size: 25px;
    margin: 0 20px 16px;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;
export const PlayButtonNext = styled("button")`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: none;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;
export const PlayButtonPrev = styled("button")`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: none;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;
export const Audio = styled("audio")`
    display: none;
`;
