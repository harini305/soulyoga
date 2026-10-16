// Anchor id for a class description, e.g. "Stretch & Release" -> "class-stretch-and-release"
export const classSlug = (name) =>
  `class-${name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
