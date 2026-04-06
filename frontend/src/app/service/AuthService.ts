import { RegisterRequest, AuthResponse } from "../types/Auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5054/api";


export const authService = {
    register: async (data: RegisterRequest): Promise<AuthResponse> => {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error to register user");
        }

        return await response.json();
    }

}