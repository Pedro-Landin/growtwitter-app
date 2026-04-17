import { api } from "./api";
// Importando as interfaces que definimos no arquivo de types
import type { LoginCredentials, LoginResponse } from "../types/auth"; 

export interface AuthResult extends Partial<LoginResponse> {
    ok: boolean;
}

class AuthService {
    public async login(credentials: LoginCredentials): Promise<AuthResult> {
        try {

            const result = await api.post<LoginResponse>('/auth/login', credentials);
            
            return {
                ...result.data,
                ok: true
            };
        } catch (error: any) {
            console.error("Erro no login:", error);
            
            return {
                ok: false,
                message: error.response?.data?.message || "Erro ao realizar login",
                success: false
            };
        }
    }
}

export default new AuthService();