import type { Tweet } from "../../types/tweet";
import { formatDate } from "../../utils/formatDate"; 
import { ContainerTweetCard, InfoTweetCard, TweetCardRow } from "./styles";

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
                    <div>
                        <span>{tweet.replies.length}</span>
                    </div>
                    
                    <div>
                        <span>{Array.isArray(tweet.likes) ? tweet.likes.length : tweet.likes}</span>
                    </div>
                </TweetCardRow>
            </InfoTweetCard>

        </ContainerTweetCard>
    );
}