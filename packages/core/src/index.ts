const ALPHANUMERIC = 'abcdefghijklmnopqrstuvwxyz0123456789';

function randomSegment(length: number) {
  return Array.from(
    { length },
    () => ALPHANUMERIC[Math.floor(Math.random() * ALPHANUMERIC.length)]
  ).join('');
}

export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function createCoreId(prefix = 'core', length = 8): string {
  const normalizedLength = Math.max(1, Math.min(length, 32));
  const trimmedPrefix = slugify(prefix) || 'core';
  const segment = randomSegment(normalizedLength);
  return `${trimmedPrefix}-${segment}`;
}

export function ensureArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}
