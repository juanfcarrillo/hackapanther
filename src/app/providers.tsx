'use client'

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProvidersProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient()

export default function Providers({ children }: ProvidersProps): JSX.Element {
    return (
        <NextUIProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </NextUIProvider>
    )
}