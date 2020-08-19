const graphql = require("graphql");
const ActivityType = require("./activity");
const ActivityModel = require("../../../../models/activity.model");
const {
  addActivity,
  editActivity,
  deleteActivity,
} = require("../mutations/activity");

const { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    activity: {
      type: ActivityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return ActivityModel.findById(args.id);
      },
    },
    activities: {
      type: new GraphQLList(ActivityType),
      resolve() {
        return ActivityModel.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addActivity,
    editActivity,
    deleteActivity,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
