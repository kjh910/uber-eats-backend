module.exports = {
    client: {
      includes: ["./src/**/*.tsx"],
      tagName: "gql",
      service: {
        name: "uber-eats-backend",
        url: "http://backend:4000/graphql"
      }
    }
  };