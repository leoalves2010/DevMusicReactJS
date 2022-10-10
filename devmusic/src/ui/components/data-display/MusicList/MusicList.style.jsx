import styled from "@emotion/styled/macro";

export const MusicsList = styled("ul")`
    list-style-type: decimal;
    margin: 32px 0 0;
    max-height: 100%;
    min-height: 100px;
    overflow-y: auto;
`;

export const MusicName = styled("span")`
    grid-area: name;
`;

export const MusicArtist = styled("span")`
    grid-area: artist;
    color: ${({ theme }) => theme.textSecondary};
`;

export const MusicTime = styled("span")`
    grid-area: time;
    width: 80px;
    text-align: right;
    color: ${({ theme }) => theme.textSecondary};
`;

export const MusicListItem = styled("li")`
    padding: 8px 32px 8px 8px;
    cursor: pointer;

    &.selected {
        color: ${({ theme }) => theme.primary};
    }

    &:hover {
        opacity: 0.8;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const MusicInformation = styled("div")`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
        "name time"
        "artist time";
    align-items: center;
`;
