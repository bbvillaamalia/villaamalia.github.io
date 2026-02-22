export function withBase(base, path) {
  const b = base.endsWith("/") ? base : base + "/";
  const p = path.startsWith("/") ? path.slice(1) : path;
  return b + p; // <-- base PRIMA, poi path
}