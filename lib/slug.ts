/** Stable element id for a project card, shared by Projects and Skills. */
export function projectId(name: string): string {
  return (
    "project-" +
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}
