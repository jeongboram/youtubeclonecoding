declare namespace NodeJS {
    export interface ProcessEnv {
        ENV_MODE: string;
        NEXTAUTH_URL: string;
        NEXT_PUBLIC_API_KEY: string;
        NEXT_PUBLIC_GOOGLE_ID: string;
        NEXT_PUBLIC_GOOGLE_SECRET: string;
    }
}