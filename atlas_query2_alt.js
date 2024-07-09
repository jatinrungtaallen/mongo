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
                              queryString: {
                                query: '1418 OR 664 OR 667 OR 1416 OR 231',
                                defaultPath: 'taxonomyData.subtopicId',
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
