let data = {
  name: "Eloilson",
  avatar:
    "https://avatars.githubusercontent.com/u/59416393?s=400&u=028ddf3943aa1e534f6f552dc60362d7cfbd72e4&v=4",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4,
  "value-hour": 75,
};

module.exports = {
  get() {
    return data;
  },
  update(newData) {
    data = newData;
  },
};
