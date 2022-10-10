import styled from "@emotion/styled/macro";

export const TimelineLine = styled("div")`
    height: 100%;
    width: var(--width);
    background-color: ${({ theme }) => theme.primary};
    border-radius: 10px;
`;

export const TimelineContainer = styled("div")`
    width: 100%;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &:hover ${TimelineLine} {
        background-color: ${({ theme }) => theme.primary};
    }
`;

export const TimelineSlider = styled("input")`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0%;
`;
