// Representa o usuário que vem dentro do 'data' da API
export interface AuthUser {
    id: string;
    name: string;
    username: string;
}

// Representa a estrutura completa da resposta de login bem-sucedido
export interface LoginResponse {
    success: boolean;
    message: string;
    data: {
        authToken: string;
        authUser: AuthUser;
    };
}

// Representa os dados que saem do seu formulário para a API
export interface LoginCredentials {
    username: string;
    password?: string; 
}