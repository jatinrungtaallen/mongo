// atlas_query2.js

db.questions
  .aggregate([
    {
      $search: {
        compound: {
          must: [
            { equals: { path: 'status', value: 2 } },
            { equals: { path: 'qnsLevel', value: 3 } },
            {
              embeddedDocument: {
                path: 'customTags',
                operator: {
                  compound: {
                    must: [
                      { text: { query: 'yes', path: 'customTags.value' } },
                      { text: { query: 'Q-REEL', path: 'customTags.tag_name' } },
                    ],
                  },
                },
              },
            },
            {
              compound: {
                minimumShouldMatch: 1,
                should: [
                  {
                    embeddedDocument: {
                      path: 'taxonomyData',
                      operator: {
                        compound: {
                          must: [
                            { text: { query: '1703061260BO', path: 'taxonomyData.taxonomyId' } },
                            {
                              compound: {
                                minimumShouldMatch: 1,
                                should: [
                                  { text: { query: '1418', path: 'taxonomyData.subtopicId' } },
                                  { text: { query: '664', path: 'taxonomyData.subtopicId' } },
                                  { text: { query: '667', path: 'taxonomyData.subtopicId' } },
                                  { text: { query: '1416', path: 'taxonomyData.subtopicId' } },
                                  { text: { query: '231', path: 'taxonomyData.subtopicId' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    { $count: 'count' },
  ])
  .explain('executionStats');
