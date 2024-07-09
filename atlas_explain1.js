const a = {
  explainVersion: '1',
  stages: [
    {
      $_internalSearchMongotRemote: {
        mongotQuery: {
          compound: {
            must: [
              { equals: { path: 'status', value: 2 } },
              { equals: { path: 'qnsLevel', value: 2 } },
              {
                embeddedDocument: {
                  path: 'customTags',
                  operator: {
                    compound: {
                      must: [
                        {
                          text: { query: 'yes', path: 'customTags.value' },
                        },
                        {
                          text: {
                            query: 'Q-REEL',
                            path: 'customTags.tag_name',
                          },
                        },
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
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '1418',
                                  path: 'taxonomyData.subtopicId',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      embeddedDocument: {
                        path: 'taxonomyData',
                        operator: {
                          compound: {
                            must: [
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '664',
                                  path: 'taxonomyData.subtopicId',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      embeddedDocument: {
                        path: 'taxonomyData',
                        operator: {
                          compound: {
                            must: [
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '667',
                                  path: 'taxonomyData.subtopicId',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      embeddedDocument: {
                        path: 'taxonomyData',
                        operator: {
                          compound: {
                            must: [
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '1416',
                                  path: 'taxonomyData.subtopicId',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      embeddedDocument: {
                        path: 'taxonomyData',
                        operator: {
                          compound: {
                            must: [
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '231',
                                  path: 'taxonomyData.subtopicId',
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
        explain: {
          query: {
            type: 'BooleanQuery',
            stats: {
              context: {
                millisElapsed: 2.430137,
                invocationCounts: { createWeight: Long('1'), createScorer: Long('29') },
              },
              match: {
                millisElapsed: 19.62975,
                invocationCounts: { nextDoc: Long('20') },
              },
              score: {
                millisElapsed: 0.19535,
                invocationCounts: { score: Long('7') },
              },
            },
            args: {
              must: [
                {
                  path: 'compound.must[3]',
                  type: 'BooleanQuery',
                  stats: {
                    context: {
                      millisElapsed: 1.094789,
                      invocationCounts: {
                        createWeight: Long('1'),
                        createScorer: Long('40'),
                      },
                    },
                    match: {
                      millisElapsed: 0.004069,
                      invocationCounts: { refineRoughMatch: Long('7') },
                    },
                    score: {
                      millisElapsed: 0.06853,
                      invocationCounts: { score: Long('7') },
                    },
                  },
                  args: {
                    must: [],
                    mustNot: [],
                    should: [
                      {
                        path: 'compound.must[3].compound.should[2]',
                        type: 'WrappedToParentBlockJoinQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.170723,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('40'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          query: {
                            type: 'BooleanQuery',
                            stats: {
                              context: { millisElapsed: 0 },
                              match: { millisElapsed: 0 },
                              score: { millisElapsed: 0 },
                            },
                            args: {
                              must: [
                                {
                                  path: 'compound.must[3].compound.should[2].compound.must[1]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.069281,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('40'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: { millisElapsed: 0 },
                                  },
                                  args: {
                                    path: 'taxonomyData.subtopicId',
                                    value: '667',
                                  },
                                },
                                {
                                  path: 'compound.must[3].compound.should[2].compound.must[0]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.053304,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('40'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: { millisElapsed: 0 },
                                  },
                                  args: {
                                    path: 'taxonomyData.taxonomyId',
                                    value: '1703061260BO',
                                  },
                                },
                              ],
                              mustNot: [],
                              should: [],
                              filter: [],
                              minimumShouldMatch: 0,
                            },
                          },
                        },
                      },
                      {
                        path: 'compound.must[3].compound.should[3]',
                        type: 'WrappedToParentBlockJoinQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.171223,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('38'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          query: {
                            type: 'BooleanQuery',
                            stats: {
                              context: { millisElapsed: 0 },
                              match: { millisElapsed: 0 },
                              score: { millisElapsed: 0 },
                            },
                            args: {
                              must: [
                                {
                                  path: 'compound.must[3].compound.should[3].compound.must[1]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.075216,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('38'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: { millisElapsed: 0 },
                                  },
                                  args: {
                                    path: 'taxonomyData.subtopicId',
                                    value: '1416',
                                  },
                                },
                                {
                                  path: 'compound.must[3].compound.should[3].compound.must[0]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.05315,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('38'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: { millisElapsed: 0 },
                                  },
                                  args: {
                                    path: 'taxonomyData.taxonomyId',
                                    value: '1703061260BO',
                                  },
                                },
                              ],
                              mustNot: [],
                              should: [],
                              filter: [],
                              minimumShouldMatch: 0,
                            },
                          },
                        },
                      },
                      {
                        path: 'compound.must[3].compound.should[4]',
                        type: 'WrappedToParentBlockJoinQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.159015,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('36'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: {
                            millisElapsed: 0.045199,
                            invocationCounts: { score: Long('6') },
                          },
                        },
                        args: {
                          query: {
                            type: 'BooleanQuery',
                            stats: {
                              context: { millisElapsed: 0 },
                              match: { millisElapsed: 0 },
                              score: { millisElapsed: 0 },
                            },
                            args: {
                              must: [
                                {
                                  path: 'compound.must[3].compound.should[4].compound.must[1]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.066999,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('36'),
                                      },
                                    },
                                    match: {
                                      millisElapsed: 0.005605,
                                      invocationCounts: { nextDoc: Long('6') },
                                    },
                                    score: {
                                      millisElapsed: 0.008312,
                                      invocationCounts: { score: Long('6') },
                                    },
                                  },
                                  args: {
                                    path: 'taxonomyData.subtopicId',
                                    value: '231',
                                  },
                                },
                                {
                                  path: 'compound.must[3].compound.should[4].compound.must[0]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.051911,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('36'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: {
                                      millisElapsed: 0.015179,
                                      invocationCounts: { score: Long('6') },
                                    },
                                  },
                                  args: {
                                    path: 'taxonomyData.taxonomyId',
                                    value: '1703061260BO',
                                  },
                                },
                              ],
                              mustNot: [],
                              should: [],
                              filter: [],
                              minimumShouldMatch: 0,
                            },
                          },
                        },
                      },
                      {
                        path: 'compound.must[3].compound.should[0]',
                        type: 'WrappedToParentBlockJoinQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.212849,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('40'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: {
                            millisElapsed: 0.019273,
                            invocationCounts: { score: Long('1') },
                          },
                        },
                        args: {
                          query: {
                            type: 'BooleanQuery',
                            stats: {
                              context: { millisElapsed: 0 },
                              match: { millisElapsed: 0 },
                              score: { millisElapsed: 0 },
                            },
                            args: {
                              must: [
                                {
                                  path: 'compound.must[3].compound.should[0].compound.must[1]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.096097,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('40'),
                                      },
                                    },
                                    match: {
                                      millisElapsed: 0.002601,
                                      invocationCounts: { nextDoc: Long('7') },
                                    },
                                    score: {
                                      millisElapsed: 0.002798,
                                      invocationCounts: { score: Long('7') },
                                    },
                                  },
                                  args: {
                                    path: 'taxonomyData.subtopicId',
                                    value: '1418',
                                  },
                                },
                                {
                                  path: 'compound.must[3].compound.should[0].compound.must[0]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.06921,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('40'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: {
                                      millisElapsed: 0.00385,
                                      invocationCounts: { score: Long('7') },
                                    },
                                  },
                                  args: {
                                    path: 'taxonomyData.taxonomyId',
                                    value: '1703061260BO',
                                  },
                                },
                              ],
                              mustNot: [],
                              should: [],
                              filter: [],
                              minimumShouldMatch: 0,
                            },
                          },
                        },
                      },
                      {
                        path: 'compound.must[3].compound.should[1]',
                        type: 'WrappedToParentBlockJoinQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.179889,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('40'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          query: {
                            type: 'BooleanQuery',
                            stats: {
                              context: { millisElapsed: 0 },
                              match: { millisElapsed: 0 },
                              score: { millisElapsed: 0 },
                            },
                            args: {
                              must: [
                                {
                                  path: 'compound.must[3].compound.should[1].compound.must[1]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.07822,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('40'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: { millisElapsed: 0 },
                                  },
                                  args: {
                                    path: 'taxonomyData.subtopicId',
                                    value: '664',
                                  },
                                },
                                {
                                  path: 'compound.must[3].compound.should[1].compound.must[0]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.054096,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('40'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: { millisElapsed: 0 },
                                  },
                                  args: {
                                    path: 'taxonomyData.taxonomyId',
                                    value: '1703061260BO',
                                  },
                                },
                              ],
                              mustNot: [],
                              should: [],
                              filter: [],
                              minimumShouldMatch: 0,
                            },
                          },
                        },
                      },
                    ],
                    filter: [],
                    minimumShouldMatch: 1,
                  },
                },
                {
                  path: 'compound.must[1]',
                  type: 'BooleanQuery',
                  stats: {
                    context: {
                      millisElapsed: 0.208175,
                      invocationCounts: {
                        createWeight: Long('1'),
                        createScorer: Long('42'),
                      },
                    },
                    match: {
                      millisElapsed: 0.092796,
                      invocationCounts: { refineRoughMatch: Long('101') },
                    },
                    score: {
                      millisElapsed: 0.005848,
                      invocationCounts: { score: Long('7') },
                    },
                  },
                  args: {
                    must: [],
                    mustNot: [],
                    should: [
                      {
                        type: 'PointRangeQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.001543,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('16'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          path: 'qnsLevel',
                          representation: 'int64',
                          gte: Long('2'),
                          lte: Long('2'),
                        },
                      },
                      {
                        type: 'IndexOrDocValuesQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.002069,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('16'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          query: [
                            {
                              type: 'PointRangeQuery',
                              stats: {
                                context: { millisElapsed: 0 },
                                match: { millisElapsed: 0 },
                                score: { millisElapsed: 0 },
                              },
                              args: {
                                path: 'qnsLevel',
                                representation: 'double',
                                gte: 2,
                                lte: 2,
                              },
                            },
                            {
                              type: 'SortedNumericDocValuesRangeQuery',
                              stats: {
                                context: { millisElapsed: 0 },
                                match: { millisElapsed: 0 },
                                score: { millisElapsed: 0 },
                              },
                              args: {},
                            },
                          ],
                        },
                      },
                      {
                        type: 'PointRangeQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.002328,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('16'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          path: 'qnsLevel',
                          representation: 'double',
                          gte: 2,
                          lte: 2,
                        },
                      },
                      {
                        type: 'IndexOrDocValuesQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.145314,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('42'),
                            },
                          },
                          match: {
                            millisElapsed: 0.038548,
                            invocationCounts: { refineRoughMatch: Long('101') },
                          },
                          score: {
                            millisElapsed: 0.002682,
                            invocationCounts: { score: Long('7') },
                          },
                        },
                        args: {
                          query: [
                            {
                              type: 'PointRangeQuery',
                              stats: {
                                context: { millisElapsed: 0 },
                                match: { millisElapsed: 0 },
                                score: { millisElapsed: 0 },
                              },
                              args: {
                                path: 'qnsLevel',
                                representation: 'int64',
                                gte: Long('2'),
                                lte: Long('2'),
                              },
                            },
                            {
                              type: 'SortedNumericDocValuesRangeQuery',
                              stats: {
                                context: { millisElapsed: 0 },
                                match: { millisElapsed: 0 },
                                score: { millisElapsed: 0 },
                              },
                              args: {},
                            },
                          ],
                        },
                      },
                    ],
                    filter: [],
                    minimumShouldMatch: 0,
                  },
                },
                {
                  path: 'compound.must[0]',
                  type: 'BooleanQuery',
                  stats: {
                    context: {
                      millisElapsed: 0.417914,
                      invocationCounts: {
                        createWeight: Long('1'),
                        createScorer: Long('42'),
                      },
                    },
                    match: {
                      millisElapsed: 0.018951,
                      invocationCounts: { refineRoughMatch: Long('22') },
                    },
                    score: {
                      millisElapsed: 0.003066,
                      invocationCounts: { score: Long('7') },
                    },
                  },
                  args: {
                    must: [],
                    mustNot: [],
                    should: [
                      {
                        type: 'PointRangeQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.003701,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('16'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          path: 'status',
                          representation: 'int64',
                          gte: Long('2'),
                          lte: Long('2'),
                        },
                      },
                      {
                        type: 'IndexOrDocValuesQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.002435,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('16'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          query: [
                            {
                              type: 'PointRangeQuery',
                              stats: {
                                context: { millisElapsed: 0 },
                                match: { millisElapsed: 0 },
                                score: { millisElapsed: 0 },
                              },
                              args: {
                                path: 'status',
                                representation: 'double',
                                gte: 2,
                                lte: 2,
                              },
                            },
                            {
                              type: 'SortedNumericDocValuesRangeQuery',
                              stats: {
                                context: { millisElapsed: 0 },
                                match: { millisElapsed: 0 },
                                score: { millisElapsed: 0 },
                              },
                              args: {},
                            },
                          ],
                        },
                      },
                      {
                        type: 'PointRangeQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.001592,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('16'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          path: 'status',
                          representation: 'double',
                          gte: 2,
                          lte: 2,
                        },
                      },
                      {
                        type: 'IndexOrDocValuesQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.301983,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('42'),
                            },
                          },
                          match: {
                            millisElapsed: 0.011496,
                            invocationCounts: { refineRoughMatch: Long('22') },
                          },
                          score: {
                            millisElapsed: 0.000966,
                            invocationCounts: { score: Long('7') },
                          },
                        },
                        args: {
                          query: [
                            {
                              type: 'PointRangeQuery',
                              stats: {
                                context: { millisElapsed: 0 },
                                match: { millisElapsed: 0 },
                                score: { millisElapsed: 0 },
                              },
                              args: {
                                path: 'status',
                                representation: 'int64',
                                gte: Long('2'),
                                lte: Long('2'),
                              },
                            },
                            {
                              type: 'SortedNumericDocValuesRangeQuery',
                              stats: {
                                context: { millisElapsed: 0 },
                                match: { millisElapsed: 0 },
                                score: { millisElapsed: 0 },
                              },
                              args: {},
                            },
                          ],
                        },
                      },
                    ],
                    filter: [],
                    minimumShouldMatch: 0,
                  },
                },
                {
                  path: 'compound.must[2]',
                  type: 'WrappedToParentBlockJoinQuery',
                  stats: {
                    context: {
                      millisElapsed: 0.386761,
                      invocationCounts: {
                        createWeight: Long('1'),
                        createScorer: Long('42'),
                      },
                    },
                    match: { millisElapsed: 0 },
                    score: {
                      millisElapsed: 0.109149,
                      invocationCounts: { score: Long('7') },
                    },
                  },
                  args: {
                    query: {
                      type: 'BooleanQuery',
                      stats: {
                        context: { millisElapsed: 0 },
                        match: { millisElapsed: 0 },
                        score: { millisElapsed: 0 },
                      },
                      args: {
                        must: [
                          {
                            path: 'compound.must[2].compound.must[1]',
                            type: 'TermQuery',
                            stats: {
                              context: {
                                millisElapsed: 0.069994,
                                invocationCounts: {
                                  createWeight: Long('1'),
                                  createScorer: Long('40'),
                                },
                              },
                              match: {
                                millisElapsed: 0.003472,
                                invocationCounts: { nextDoc: Long('7') },
                              },
                              score: {
                                millisElapsed: 0.048449,
                                invocationCounts: { score: Long('7') },
                              },
                            },
                            args: {
                              path: 'customTags.tag_name',
                              value: 'Q-REEL',
                            },
                          },
                          {
                            path: 'compound.must[2].compound.must[0]',
                            type: 'TermQuery',
                            stats: {
                              context: {
                                millisElapsed: 0.192015,
                                invocationCounts: {
                                  createWeight: Long('1'),
                                  createScorer: Long('42'),
                                },
                              },
                              match: { millisElapsed: 0 },
                              score: {
                                millisElapsed: 0.048687,
                                invocationCounts: { score: Long('7') },
                              },
                            },
                            args: { path: 'customTags.value', value: 'yes' },
                          },
                        ],
                        mustNot: [],
                        should: [],
                        filter: [],
                        minimumShouldMatch: 0,
                      },
                    },
                  },
                },
              ],
              mustNot: [],
              should: [],
              filter: [],
              minimumShouldMatch: 0,
            },
          },
          collectStats: {
            millisElapsed: 0.259497,
            invocationCounts: { collect: Long('7'), setScorer: Long('13') },
          },
          resourceUsage: {
            majorFaults: Long('0'),
            minorFaults: Long('0'),
            userTimeMs: Long('30'),
            systemTimeMs: Long('0'),
            reportingThreads: 1,
          },
        },
      },
      nReturned: Long('0'),
      executionTimeMillisEstimate: Long('33'),
    },
    {
      $_internalSearchIdLookup: {},
      nReturned: Long('0'),
      executionTimeMillisEstimate: Long('33'),
    },
    {
      $sample: { size: Long('10') },
      nReturned: Long('0'),
      executionTimeMillisEstimate: Long('33'),
    },
  ],
  command: {
    aggregate: 'questions',
    pipeline: [
      {
        $search: {
          compound: {
            must: [
              { equals: { path: 'status', value: 2 } },
              { equals: { path: 'qnsLevel', value: 2 } },
              {
                embeddedDocument: {
                  path: 'customTags',
                  operator: {
                    compound: {
                      must: [
                        {
                          text: { query: 'yes', path: 'customTags.value' },
                        },
                        {
                          text: {
                            query: 'Q-REEL',
                            path: 'customTags.tag_name',
                          },
                        },
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
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '1418',
                                  path: 'taxonomyData.subtopicId',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      embeddedDocument: {
                        path: 'taxonomyData',
                        operator: {
                          compound: {
                            must: [
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '664',
                                  path: 'taxonomyData.subtopicId',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      embeddedDocument: {
                        path: 'taxonomyData',
                        operator: {
                          compound: {
                            must: [
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '667',
                                  path: 'taxonomyData.subtopicId',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      embeddedDocument: {
                        path: 'taxonomyData',
                        operator: {
                          compound: {
                            must: [
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '1416',
                                  path: 'taxonomyData.subtopicId',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      embeddedDocument: {
                        path: 'taxonomyData',
                        operator: {
                          compound: {
                            must: [
                              {
                                text: {
                                  query: '1703061260BO',
                                  path: 'taxonomyData.taxonomyId',
                                },
                              },
                              {
                                text: {
                                  query: '231',
                                  path: 'taxonomyData.subtopicId',
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
      { $sample: { size: 10 } },
    ],
    cursor: {},
    $db: 'qb',
  },
  ok: 1,
};
