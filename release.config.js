module.exports = {
  branches: [
    "release",
    { name: "preview", channel: "alpha", prerelease: "alpha" },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        // We're not publishing a package to `npm` or artifactory, so disable the
        // publish step. This plugin still updates the version in package.json.
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "dist/asset.txt",
      },
    ],
    "@semantic-release/git",
  ],
};
