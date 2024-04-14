
export const privateFetch = (uri: string, init?: RequestInit) => {
  return fetch((process.env.NEXT_PUBLIC_MOCK_ENABLED == 'true' ? process.env.MOCK_API_URL : process.env.API_URL) + uri, init)
}

export const publicFetch = (uri: string, init?: RequestInit) => {
  return fetch((process.env.NEXT_PUBLIC_MOCK_ENABLED == 'true' ? process.env.NEXT_PUBLIC_MOCK_API_URL : process.env.NEXT_PUBLIC_API_URL) + uri, init)
}