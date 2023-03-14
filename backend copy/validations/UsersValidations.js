const Ajv = require("ajv");

const ajv = new Ajv();

module.exports.RegisterValidation = ajv.compile({
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" },
    password2: { type: "string" },

    phone: { type: "string" },
    email: { type: "string" },
  },
  required: ["email", "password", "password2", "username", "phone"],
  additionalProperties: false,
});

module.exports.LoginValidation = ajv.compile({
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" },
  },
  required: ["username", "password"],
  additionalProperties: false,
});
