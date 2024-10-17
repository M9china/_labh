'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import React, { useState } from 'react'
import { trpc } from './client'
import superjson from 'superjson'

/**
 * Creates a server provider component that wraps the given children with a trpc client and a query client.
 *
 * @param {Object} props - The props object.
 * @param {string} props.url - The URL of the server.
 * @param {React.ReactNode} props.children - The children to be wrapped by the server provider.
 * @return {JSX.Element} The server provider component.
 */
export const TrpcServerProvider = ({ children, url }: {url: string, children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(trpc.createClient({
        links: [
            httpBatchLink({
                transformer: superjson,
                url,
            })
        ]
    }))
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider  client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}
