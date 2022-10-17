export default {
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'points',
      title: 'Points',
      type: 'number',
    },
    {
      name: 'answer_1',
      title: 'Answer 1',
      type: 'string',
    },
    {
      name: 'answer_2',
      title: 'Answer 2',
      type: 'string',
    },
    {
      name: 'answer_3',
      title: 'Answer 3',
      type: 'string',
    },
    {
      name: 'answer_4',
      title: 'Answer 4',
      type: 'string',
    },
    {
      name: 'correct_answer_id',
      title: 'Correct answer id',
      type: 'number',
      options: {
        list: [
          1, 2, 3, 4
        ]
      }
    },
  ],
}
