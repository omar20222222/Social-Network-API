const { Schema, Types } = require("mongoose");
const formatDate = require("../utils/formatDate");

const reactionSchema = new Schema(
  {
    id: {
      type: Number,
    },
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      // required: true,
      maxLength: 260,
    },
    username: {
      type: String,
      // required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => formatDate(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    // id: false,
  }
);

module.exports = reactionSchema;
