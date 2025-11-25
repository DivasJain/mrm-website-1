// Authentication utilities and types
export interface User {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  role: "general" | "dealer" | "admin"
  dealerCode?: string
}

export interface LoginCredentials {
  email: string
  password: string
  dealerCode?: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  company?: string
  phone?: string
  role: "general" | "dealer"
  dealerCode?: string
}

// Mock authentication functions - replace with real API calls
export async function loginUser(credentials: LoginCredentials): Promise<{ user: User; token: string } | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock successful login
  if (credentials.email && credentials.password) {
    const user: User = {
      id: "1",
      name: "Demo User",
      email: credentials.email,
      role: credentials.dealerCode ? "dealer" : "general",
      dealerCode: credentials.dealerCode,
    }

    return {
      user,
      token: "mock-jwt-token",
    }
  }

  return null
}

export async function registerUser(data: RegisterData): Promise<{ user: User; token: string } | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Mock successful registration
  const user: User = {
    id: Date.now().toString(),
    name: data.name,
    email: data.email,
    company: data.company,
    phone: data.phone,
    role: data.role,
    dealerCode: data.dealerCode,
  }

  return {
    user,
    token: "mock-jwt-token",
  }
}

export function getStoredAuth(): { user: User; token: string } | null {
  if (typeof window === "undefined") return null

  try {
    const token = localStorage.getItem("auth-token")
    const userData = localStorage.getItem("auth-user")

    if (token && userData) {
      return {
        user: JSON.parse(userData),
        token,
      }
    }
  } catch (error) {
    console.error("Error reading stored auth:", error)
  }

  return null
}

export function storeAuth(user: User, token: string): void {
  if (typeof window === "undefined") return

  localStorage.setItem("auth-token", token)
  localStorage.setItem("auth-user", JSON.stringify(user))
}

export function clearAuth(): void {
  if (typeof window === "undefined") return

  localStorage.removeItem("auth-token")
  localStorage.removeItem("auth-user")
}
