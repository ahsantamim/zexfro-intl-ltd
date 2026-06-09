"use server";

import { revalidatePath } from "next/cache";

/**
 * Cache revalidation utilities for Next.js server-side caching
 * Call these functions after data mutations to keep dashboard fresh
 */

/**
 * Revalidate all dashboard-related caches
 * Use after any admin action that should update dashboard
 */
export async function revalidateDashboard() {
  // Revalidate the admin page path
  revalidatePath("/[locale]/admin", "page");
}

/**
 * Revalidate after product changes (create, update, delete)
 */
export async function revalidateAfterProductChange() {
  revalidatePath("/[locale]/admin", "page");
  revalidatePath("/[locale]/admin/products", "page");
}

/**
 * Revalidate after blog post changes
 */
export async function revalidateAfterBlogChange() {
  revalidatePath("/[locale]/admin", "page");
  revalidatePath("/[locale]/admin/blog", "page");
  revalidatePath("/[locale]/blog", "page");
  revalidatePath("/[locale]/blog/[slug]", "page");
}

/**
 * Revalidate after category changes
 */
export async function revalidateAfterCategoryChange() {
  revalidatePath("/[locale]/admin", "page");
  revalidatePath("/[locale]/admin/categories", "page");
}

/**
 * Revalidate after user/registration changes
 */
export async function revalidateAfterUserChange() {
  revalidatePath("/[locale]/admin", "page");
  revalidatePath("/[locale]/admin/users", "page");
  revalidatePath("/[locale]/admin/registrations", "page");
}
