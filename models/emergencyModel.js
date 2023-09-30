const mongoose = require("mongoose");
const EmergencySchema = mongoose.Schema(
  {
    mapsrc: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Emergency = mongoose.model("Incident", IncidentSchema);
module.exports = { Emergency };
