const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const ActivityType = new GraphQLObjectType({
  name: "Activity",
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLString },
    tags: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    // details: { type: GraphQLObjectType },
  }),
});

module.exports = ActivityType;
