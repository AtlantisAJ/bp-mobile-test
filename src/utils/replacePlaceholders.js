export function replacePlaceholders(str, values) {
  return str.replace(/{{(\w+)}}/g, (_, key) => values[key] || `{{${key}}}`);
}
