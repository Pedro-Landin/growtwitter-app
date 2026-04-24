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
        
        const response = await api.get<FeedResponse>('/feed', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },

    getUserTweets: async (userId: string) => {
        const token = localStorage.getItem("@GrowTwitter:token");
        
        const response = await api.get<FeedResponse>(`/users/${userId}/tweets`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
};

export default TweetService;