import { api } from "./api";
import type { Tweet } from "../types/tweet";

interface FeedResponse {
  success: boolean;
  data: Tweet[];
  message: string;
}

const TweetService = {
  getFeed: async () => {
    const token = localStorage.getItem("@GrowTwitter:token");

    const response = await api.get<FeedResponse>("/feed", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  getUserTweets: async (userId: string) => {
    const token = localStorage.getItem("@GrowTwitter:token");

    const response = await api.get<FeedResponse>(`/users/${userId}/tweets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  createTweet: async (content: string) => {
    try {
      const token = localStorage.getItem("@GrowTwitter:token");

      const response = await api.post(
        "/tweets",
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao criar tweet", error);
      return {
        success: false,
        message: "Não foi possível publicar seu tweet.",
      };
    }
  },

  deleteTweet: async (tweetId: string) => {
    try {
      const token = localStorage.getItem("@GrowTwitter:token");
      const response = await api.delete(`/tweets/${tweetId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar tweet", error);
      return { success: false };
    }
  },
  likeTweet: async (tweetId: string) => {
    try {
      const token = localStorage.getItem("@GrowTwitter:token");
      const response = await api.post(
        "/likes",
        { tweetId },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao dar like", error);
      return { success: false };
    }
  },

  userUnLike: async (tweetId: string) => {
    try {
      const token = localStorage.getItem("@GrowTwitter:token");
      const response = await api.delete("/likes", {
        data: { tweetId },
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao remover like", error);
      return { success: false };
    }
  },

  createReply: async (content: string, replyTo: string) => {
    const token = localStorage.getItem("@GrowTwitter:token");
    const response = await api.post(
      "/replies",
      { content, replyTo },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
  },
};

export default TweetService;
