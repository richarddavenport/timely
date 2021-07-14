module.exports = {
    schema: [
      {
        "http://198.211.96.24/v1/graphql": {
          headers: {
            "x-hasura-admin-secret": "Ending-Tingly-Enlarged8"
          },
        },
      },
    ],
    documents: ["./**/*.tsx", "./**/*.ts", "!./node_modules"],
    overwrite: true,
    generates: {
      "./generated/graphql.tsx": {
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-react-apollo",
        ],
        config: {
          skipTypename: false,
          withHooks: true,
          withHOC: false,
          withComponent: false,
        },
      },
      "./graphql.schema.json": {
        plugins: ["introspection"],
      },
    },
  };
  