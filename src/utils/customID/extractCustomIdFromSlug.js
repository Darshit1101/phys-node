// utils/extractCustomIdFromSlug.util.js

/**
 * Extracts the customId from a product slug.
 * Example: "50-plus-vitapakr-program-30-servings-pdcxsfyxxo8-PDCE0QTFLRT" → "PDCE0QTFLRT"
 *
 * @param {string} slug - The product slug string
 * @returns {string|null} - The extracted customId or null if not found
 */
export function extractCustomIdFromSlug(slug = '') {
  if (typeof slug !== 'string' || !slug.trim()) return null;

  // Split by "-" and get the last part
  const parts = slug.split('-');
  const customId = parts[parts.length - 1];

  // Basic validation: customId should be alphanumeric and at least 6 chars
  if (/^[A-Z0-9]{6,}$/i.test(customId)) {
    return customId;
  }

  return null;
}
