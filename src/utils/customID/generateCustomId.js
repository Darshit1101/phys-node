import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 8);

/**
 * Generate a custom prefixed ID (e.g. CONA7B8C9D0)
 * @param {string} prefix - e.g. 'CON', 'ORD', 'LBR'
 */
export default function generateCustomId(prefix) {
  return `${prefix}${nanoid()}`;
}
