import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../global.css";
import { Stack, useRouter, useSegments } from "expo-router";
import React from "react";
import { useAuthStore } from "@/store";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      onError: (error) => {
        if ("message" in error) {
          console.error(error.message);
        }
      }
    }
  },
});

export default function Layout() {
  const rootSegment = useSegments()[0];
  const token = useAuthStore(state => state.token);
    const router = useRouter();

    React.useEffect(() => {
        if(token === undefined) return
        if(!token && rootSegment !== "(auth)") {
            router.replace("/(auth)/login")
        }else if(token && rootSegment !== "(app)"){
            router.replace("(app)/home")
        }
    },[token, rootSegment])
  return (
    <QueryClientProvider client={client}>
      <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(auth)/login" />
      <Stack.Screen name="(auth)/forgotPassword"/>
      <Stack.Screen name="(auth)/signup" />
    </Stack>
    </QueryClientProvider>
  )
}
