module.exports = {
    client: {
      includes: ["./src/**/*.tsx"],
      tagName: "gql",
      service: {
        name: "backend",
        url: "http://backend_nginx:10041/graphql"
      }
    }
  };