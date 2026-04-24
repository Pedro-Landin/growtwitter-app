import { useEffect, useState } from "react";
import { TweetCard } from "../../components/TweetCard";
import TweetService from "../../services/tweet";
import type { Tweet } from "../../types/tweet";

import { BlockTitleFeed, ContainerFeed } from "./styles";

export function Feed() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTweets() {
      try {
        const response = await TweetService.getFeed();
        if (response.success) {
          setTweets(response.data);
        }
      } catch (error) {
        console.error("Erro ao carregar feed:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTweets();
  }, []);

  if (loading) {
    return <h2>Carregando tweets...</h2>;
  }

  return (
    <ContainerFeed>
      <BlockTitleFeed>
        <h1>Página Inicial</h1>
      </BlockTitleFeed>

      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </ContainerFeed>
  );
}
