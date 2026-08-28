import type {
  Solution,
  PaginatedResponse,
  CategoriesResponse,
  SolutionDemand,
  DemandResponse,
} from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `API error ${res.status}`);
  }

  return res.json();
}

export function getSolutions(perPage = 12) {
  return apiFetch<PaginatedResponse<Solution>>(
    `/api/v1/solutions?per_page=${perPage}`
  );
}

export function getSolutionBySlug(slug: string) {
  return apiFetch<{ data: Solution }>(`/api/v1/solutions/${slug}`);
}

export function getCategories() {
  return apiFetch<CategoriesResponse>("/api/v1/solutions/categories");
}

export function createDemand(data: SolutionDemand) {
  return apiFetch<DemandResponse>("/api/v1/demands", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
