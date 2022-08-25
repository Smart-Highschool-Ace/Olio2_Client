import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_API_URL,
});

export default client;
