const graphql = require("graphql");
const TagsType = require("./tags");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const ActivityType = new GraphQLObjectType({
  name: "Activity",
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLString },
    tags: { type: GraphQLList(TagsType) },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    username: { type: GraphQLString },
    // details: { type: GraphQLObjectType },
  }),
});

module.exports = ActivityType;
