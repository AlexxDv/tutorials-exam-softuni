function parseError(error) {
  if (error.name == "ValidationError") {
    return Object.values(error.errors).map((v) => v.message); // TODO put return 
  } else {
    return error.message.split("\n");
  }
}

module.exports = {
  parseError,
};
