import { useEffect, useState } from "react";
import { TweetCard } from "../../components/TweetCard";
import TweetService from "../../services/tweet";
import type { Tweet } from "../../types/tweet";

import { BlockTitleFeed, ContainerFeed } from "./styles";

import { useAuth } from "../../hooks/useAuth";

export function Feed() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth(); 


  useEffect(() => {

    // Função para unificar o feed, com os tweets do usuário e os tweets de quem segue
    async function loadUnifiedFeed() {
      try {
        setLoading(true);

        // Dispara as duas chamadas em paralelo
        const [feedRes, myTweetsRes] = await Promise.all([
          TweetService.getFeed(),
          user?.id ? TweetService.getUserTweets(user.id) : Promise.resolve({ success: true, data: [] })
        ]);

        if (feedRes.success && myTweetsRes.success) {
          // 1. Junta os dois arrays
          const unifiedList = [...feedRes.data, ...myTweetsRes.data];

          // 2. Remove duplicatas com base no id
          const uniqueTweets = Array.from(
            new Map(unifiedList.map(item => [item.id, item])).values()
          );

          // 3. Ordena por data (mais recente primeiro)
          const sortedTweets = uniqueTweets.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });

          setTweets(sortedTweets);
        }
      } catch (error) {
        console.error("Erro ao unificar feed:", error);
      } finally {
        setLoading(false);
      }
    }

    loadUnifiedFeed();
  }, [user?.id]);

  if (loading) {
    return <ContainerFeed><h2>Carregando tweets...</h2></ContainerFeed>
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
