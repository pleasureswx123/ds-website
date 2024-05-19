export default function getStaticPath(path) {
  const { public: { apiBase } } = useRuntimeConfig();
  const separator = path.startsWith("/") ? '' : '/';
  return `${apiBase}${separator}${path}`;
}