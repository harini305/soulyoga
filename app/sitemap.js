import { site } from "@/data/site";

const ROUTES = ["/", "/yogaclass", "/200yogateachertraining", "/300yogateachertraining", "/recovering", "/aboutus", "/contact"];

export default function sitemap() {
  return ROUTES.map((r) => ({ url: `${site.url}${r === "/" ? "" : r}`, changeFrequency: "monthly", priority: r === "/" ? 1 : 0.8 }));
}
