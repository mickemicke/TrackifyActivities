const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const TagsType = new GraphQLObjectType({
  name: "Tags",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

module.exports = TagsType;
