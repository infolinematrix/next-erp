// lib/safeAction.ts
export async function safeAction<T>(action: () => Promise<T>): Promise<
  | { success: true; data: T }
  | { success: false; error: string }
> {
  try {
    const data = await action()
    return { success: true, data }
  } catch (err: any) {
    console.error('Action error:', err)
    return {
      success: false,
      error: err?.message || 'Unexpected error',
    }
  }
}