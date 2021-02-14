/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-postcss",
  ],
  routes: [],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2019",
    treeshake: true,
  },
  packageOptions: {
    source: "remote",
  },
  devOptions: {},
}
