import { createClientSupabaseClient } from './client';

// Supabase S3 Configuration
export const SUPABASE_S3_CONFIG = {
  endpoint: 'https://jjkczpvsxzglqursnhya.storage.supabase.co/storage/v1/s3',
  region: 'eu-central-1',
  buckets: {
    products: 'product-images',
    blog: 'blog-images',
    categories: 'category-images',
  },
};

/**
 * Upload a file to Supabase Storage (S3)
 * @param bucket - Bucket name (e.g., 'product-images')
 * @param file - File to upload
 * @param path - Path in bucket (e.g., 'products/my-image.jpg')
 */
export async function uploadToSupabase(
  bucket: string,
  file: File,
  path: string
): Promise<{ path: string; url: string; error?: string }> {
  try {
    // Use API route for server-side upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bucket', bucket);
    formData.append('path', path);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Upload error:', errorData);
      return { path: '', url: '', error: errorData.error || 'Upload failed' };
    }

    const data = await response.json();
    return {
      path: data.path,
      url: data.url,
    };
  } catch (error) {
    console.error('Upload exception:', error);
    return {
      path: '',
      url: '',
      error: error instanceof Error ? error.message : 'Upload failed',
    };
  }
}

/**
 * Upload multiple files to Supabase Storage
 * @param bucket - Bucket name
 * @param files - Files to upload
 * @param pathPrefix - Path prefix in bucket
 */
export async function uploadMultipleToSupabase(
  bucket: string,
  files: File[],
  pathPrefix: string = ''
): Promise<
  Array<{ path: string; url: string; name: string; error?: string }>
> {
  const results = await Promise.all(
    files.map(async (file) => {
      const timestamp = Date.now();
      const fileName = `${timestamp}-${file.name.replace(/\s+/g, '-')}`;
      const path = pathPrefix ? `${pathPrefix}/${fileName}` : fileName;

      const result = await uploadToSupabase(bucket, file, path);
      return {
        ...result,
        name: file.name,
      };
    })
  );

  return results;
}

/**
 * Delete a file from Supabase Storage
 * @param bucket - Bucket name
 * @param path - Path in bucket
 */
export async function deleteFromSupabase(
  bucket: string,
  path: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = createClientSupabaseClient();

    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Delete failed',
    };
  }
}
