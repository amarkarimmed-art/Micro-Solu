export interface Solution {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  description: string;
  image_url: string | null;
  price_cents: number;
  features: string[];
  status: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface CategoriesResponse {
  data: Record<string, number>;
}

export interface SolutionDemand {
  company: string;
  contact_name: string;
  email: string;
  phone?: string;
  problem: string;
  budget_range?: string;
}

export interface DemandResponse {
  message: string;
  data: SolutionDemand & { id: number; created_at: string; updated_at: string };
}
