export const fieldId = (link: string) => {
  const parts = link?.split('/');
  const id = parts[parts.length - 2];
  return id;
};
