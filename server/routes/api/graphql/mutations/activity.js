const graphql = require("graphql");
const ActivityType = require("../schemas/activity");
const ActivityModel = require("../../../../models/activity.model");

const { GraphQLList, GraphQLString, GraphQLNonNull } = graphql;

const mutations = {
  addActivity: {
    type: ActivityType,
    args: {
      date: { type: new GraphQLNonNull(GraphQLString) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      tags: { type: new GraphQLList(GraphQLString) },
      // details: { type: GraphQLObjectType },
      body: { type: GraphQLString },
    },
    resolve(parent, args) {
      const activity = new ActivityModel({
        date: args.date,
        tags: args.tags,
        details: args.details,
        body: args.body,
        title: args.title,
      });
      return activity.save();
    },
  },
  editActivity: {
    type: ActivityType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      date: { type: GraphQLString },
      title: { type: GraphQLString },
      tags: { type: new GraphQLList(GraphQLString) },
      // details: { type: GraphQLObjectType },
      body: { type: GraphQLString },
    },
    async resolve(parent, args) {
      const activity = await ActivityModel.findOneAndUpdate(
        { _id: args.id },
        args,
        { new: true }
      );
      return activity;
    },
  },
  deleteActivity: {
    type: ActivityType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args) {
      const activity = await ActivityModel.findByIdAndRemove(args.id);
      return activity;
    },
  },
};

module.exports = mutations;
