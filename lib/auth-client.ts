import { createAuthClient } from "better-auth/react";

export const authClienth = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
})