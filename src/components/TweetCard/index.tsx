import type { Tweet } from "../../types/tweet";
import { formatDate } from "../../utils/formatDate";
import { ContainerTweetCard, InfoTweetCard, TweetCardRow, TweetLinkReplie } from "./styles";

import icon_Like from '../../assets/icon_Like.png'
import icon_Replie from '../../assets/icon_Replie.png'

interface TweetCardProps {
    tweet: Tweet;
}

export function TweetCard({ tweet }: TweetCardProps) {
    return (
        <ContainerTweetCard>
            <img
                src={tweet.author.imageUrl}
                alt={tweet.author.name}
            />

            <InfoTweetCard>
                <TweetCardRow>
                    <strong>{tweet.author.name}</strong>
                    <span className="username">@{tweet.author.username}</span>
                    <span className="dot">•</span>
                    <span className="time">{formatDate(tweet.createdAt)}</span>
                </TweetCardRow>

                <p>{tweet.content}</p>

                <TweetCardRow>

                    <TweetLinkReplie>
                        <img src={icon_Replie} alt="Replies" />
                        <span>{tweet.replies.length}</span>
                    </TweetLinkReplie>

                    <TweetLinkReplie>
                        <img src={icon_Like} alt="Likes" />
                        <span>{Array.isArray(tweet.likes) ? tweet.likes.length : tweet.likes}</span>
                    </TweetLinkReplie>

                </TweetCardRow>
            </InfoTweetCard>

        </ContainerTweetCard>
    );
}