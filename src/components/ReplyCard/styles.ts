import styled from "styled-components";

export const ContainerReplyCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  position: relative;

  img {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 2;
  }

  &::before {
    content: "";
    height: calc(100% + 24px);
    width: 1.5px;
    background-color: rgb(204, 204, 204);
    position: absolute;
    top: -53px;
    left: 18px;
    z-index: 1;
  }
`;

export const InfoTweetCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  p,
  span {
    color: ${(props) => props.theme.colors.textColorTweet};
  }

  strong {
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const TweetCardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const TweetLinkReplie = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 28px;

  img {
    width: 13px !important;
    height: 13px !important;
    margin-right: 4px;
    border-radius: 0;
  }
`;
