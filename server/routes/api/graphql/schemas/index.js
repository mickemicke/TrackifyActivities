const graphql = require("graphql");
const ActivityType = require("./activity");
const ActivityModel = require("../../../../models/activity.model");
const {
  addActivity,
  editActivity,
  deleteActivity,
} = require("../mutations/activity");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
} = graphql;

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
      args: { username: { type: GraphQLString } },
      resolve(parent, args) {
        return ActivityModel.find({ username: args.username });
      },
    },
    activitiesByDate: {
      type: new GraphQLList(ActivityType),
      args: {
        date: { type: GraphQLString },
        username: { type: GraphQLString },
      },
      resolve(parent, args) {
        return ActivityModel.find({
          date: args.date,
          username: args.username,
        });
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
