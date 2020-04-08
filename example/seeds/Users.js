exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Users").insert([
        { id: 1, fullname: "John Doe" },
        { id: 2, fullname: "Jane Doe" },
        { id: 3, fullname: "Junior Doe" }
      ]);
    });
};
