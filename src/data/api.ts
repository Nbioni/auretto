import { env } from "@/env"

export function apiGet(path: string, init?: RequestInit) {
  return apiRequest("GET", path, init)
}

export function apiPost(path: string, data: any) {
  return apiRequest("POST", path, {
    body: JSON.stringify(data)
  })
}


export function apiPut(path: string, init?: RequestInit) {
  return apiRequest("PUT", path, init)
}

function apiRequest(method: string, path: string, init?: RequestInit) {
  const url = new URL(path, env.NEXT_PUBLIC_API_BASE_URL)
  const defaultHeaders = {
    "chave": env.API_KEY,
    "content-type": "application/json",
    "accept": "application/json",
  }
  const headers = init?.headers ? { ...defaultHeaders, ...init.headers } : defaultHeaders
  if (method === "GET" || method === "HEAD") {
    return fetch(url, { ...init, headers, method });
  } else {
    const modifiedInit = { ...init, headers, method };
    return fetch(url, modifiedInit);
  }
}
