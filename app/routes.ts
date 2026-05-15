import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/portfolio", "features/portfolio/pages/portfolio.tsx"),
] satisfies RouteConfig;
