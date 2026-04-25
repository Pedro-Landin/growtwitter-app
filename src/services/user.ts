import { api } from "./api";

const UserService = {
  getFollows: async () => {
    const token = localStorage.getItem("@GrowTwitter:token");
    const response = await api.get("/followers", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  userFollow: async (userId: string) => {
    const token = localStorage.getItem("@GrowTwitter:token");
    const response = await api.post(
      "/followers",
      {
        userId,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  },

  userUnFollow: async (userId: string) => {
    const token = localStorage.getItem("@GrowTwitter:token");
    const response = await api.delete("/followers", {
      data: { userId },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};

export default UserService;
