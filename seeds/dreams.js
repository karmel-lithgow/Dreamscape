exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dreams').del()
  await knex('dreams').insert([
    {
      id: 1,
      name: 'Karmel',
      dream_description:
        'This is simply a test. No dreams have yet occured... but a whole new world awaits',
    },
    {
      id: 2,
      name: 'Laurie',
      dream_description:
        'This is simply a test. No dreams have yet occured... but a whole new world awaits',
    },
  ])
}
