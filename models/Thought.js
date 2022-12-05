const { Schema, model, Types } = require("mongoose");
const formatDate = require("../utils/formatDate");
const reactionSchema = require("./Reaction");

const thoughtsSchema = new Schema(
  {
    id: {
      type: Number,
    },
    thoughtText: {
      type: String,

      maxLength: 260,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => formatDate(createdAtVal),
    },
    username: {
      username: String,
    },
    reactions: [reactionSchema],
  },
  {
    toJson: {
      virtuals: true,
      getters: true,
    },
    // id: false,
  }
);

thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtsSchema);

module.exports = Thought;
