const a = {
  explainVersion: '1',
  stages: [
    {
      $_internalSearchMongotRemote: {
        mongotQuery: {
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
                                compound: {
                                  minimumShouldMatch: 1,
                                  should: [
                                    {
                                      text: {
                                        query: '1418',
                                        path: 'taxonomyData.subtopicId',
                                      },
                                    },
                                    {
                                      text: {
                                        query: '664',
                                        path: 'taxonomyData.subtopicId',
                                      },
                                    },
                                    {
                                      text: {
                                        query: '667',
                                        path: 'taxonomyData.subtopicId',
                                      },
                                    },
                                    {
                                      text: {
                                        query: '1416',
                                        path: 'taxonomyData.subtopicId',
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
                millisElapsed: 2.834164,
                invocationCounts: { createWeight: Long('1'), createScorer: Long('27') },
              },
              match: {
                millisElapsed: 15.131673,
                invocationCounts: { nextDoc: Long('15') },
              },
              score: {
                millisElapsed: 0.088679,
                invocationCounts: { score: Long('2') },
              },
            },
            args: {
              must: [
                {
                  path: 'compound.must[3].compound.should',
                  type: 'WrappedToParentBlockJoinQuery',
                  stats: {
                    context: {
                      millisElapsed: 0.605144,
                      invocationCounts: {
                        createWeight: Long('1'),
                        createScorer: Long('39'),
                      },
                    },
                    match: { millisElapsed: 0 },
                    score: {
                      millisElapsed: 0.05019,
                      invocationCounts: { score: Long('2') },
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
                            path: 'compound.must[3].compound.should.compound.must[0]',
                            type: 'TermQuery',
                            stats: {
                              context: {
                                millisElapsed: 0.065064,
                                invocationCounts: {
                                  createWeight: Long('1'),
                                  createScorer: Long('39'),
                                },
                              },
                              match: { millisElapsed: 0 },
                              score: {
                                millisElapsed: 0.008271,
                                invocationCounts: { score: Long('8') },
                              },
                            },
                            args: {
                              path: 'taxonomyData.taxonomyId',
                              value: '1703061260BO',
                            },
                          },
                          {
                            path: 'compound.must[3].compound.should.compound.must[1]',
                            type: 'BooleanQuery',
                            stats: {
                              context: {
                                millisElapsed: 0.477606,
                                invocationCounts: {
                                  createWeight: Long('1'),
                                  createScorer: Long('39'),
                                },
                              },
                              match: {
                                millisElapsed: 0.012053,
                                invocationCounts: { nextDoc: Long('8') },
                              },
                              score: {
                                millisElapsed: 0.021702,
                                invocationCounts: { score: Long('8') },
                              },
                            },
                            args: {
                              must: [],
                              mustNot: [],
                              should: [
                                {
                                  path: 'compound.must[3].compound.should.compound.must[1].compound.should[1]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.07381,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('37'),
                                      },
                                    },
                                    match: {
                                      millisElapsed: 0.007747,
                                      invocationCounts: { nextDoc: Long('3') },
                                    },
                                    score: {
                                      millisElapsed: 0.016377,
                                      invocationCounts: { score: Long('3') },
                                    },
                                  },
                                  args: {
                                    path: 'taxonomyData.subtopicId',
                                    value: '664',
                                  },
                                },
                                {
                                  path: 'compound.must[3].compound.should.compound.must[1].compound.should[0]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.090813,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('37'),
                                      },
                                    },
                                    match: { millisElapsed: 0 },
                                    score: { millisElapsed: 0 },
                                  },
                                  args: {
                                    path: 'taxonomyData.subtopicId',
                                    value: '1418',
                                  },
                                },
                                {
                                  path: 'compound.must[3].compound.should.compound.must[1].compound.should[2]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.066044,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('37'),
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
                                  path: 'compound.must[3].compound.should.compound.must[1].compound.should[4]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.065485,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('37'),
                                      },
                                    },
                                    match: {
                                      millisElapsed: 0.000279,
                                      invocationCounts: { nextDoc: Long('5') },
                                    },
                                    score: {
                                      millisElapsed: 0.002045,
                                      invocationCounts: { score: Long('5') },
                                    },
                                  },
                                  args: {
                                    path: 'taxonomyData.subtopicId',
                                    value: '231',
                                  },
                                },
                                {
                                  path: 'compound.must[3].compound.should.compound.must[1].compound.should[3]',
                                  type: 'TermQuery',
                                  stats: {
                                    context: {
                                      millisElapsed: 0.067976,
                                      invocationCounts: {
                                        createWeight: Long('1'),
                                        createScorer: Long('37'),
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
                              ],
                              filter: [],
                              minimumShouldMatch: 1,
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
                  path: 'compound.must[1]',
                  type: 'BooleanQuery',
                  stats: {
                    context: {
                      millisElapsed: 1.344854,
                      invocationCounts: {
                        createWeight: Long('1'),
                        createScorer: Long('40'),
                      },
                    },
                    match: {
                      millisElapsed: 0.086253,
                      invocationCounts: { refineRoughMatch: Long('101') },
                    },
                    score: {
                      millisElapsed: 0.001632,
                      invocationCounts: { score: Long('2') },
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
                            millisElapsed: 0.001502,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('14'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          path: 'qnsLevel',
                          representation: 'int64',
                          gte: Long('3'),
                          lte: Long('3'),
                        },
                      },
                      {
                        type: 'IndexOrDocValuesQuery',
                        stats: {
                          context: {
                            millisElapsed: 0.002197,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('14'),
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
                                gte: 3,
                                lte: 3,
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
                            millisElapsed: 0.002499,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('14'),
                            },
                          },
                          match: { millisElapsed: 0 },
                          score: { millisElapsed: 0 },
                        },
                        args: {
                          path: 'qnsLevel',
                          representation: 'double',
                          gte: 3,
                          lte: 3,
                        },
                      },
                      {
                        type: 'IndexOrDocValuesQuery',
                        stats: {
                          context: {
                            millisElapsed: 1.278358,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('40'),
                            },
                          },
                          match: {
                            millisElapsed: 0.034213,
                            invocationCounts: { refineRoughMatch: Long('101') },
                          },
                          score: {
                            millisElapsed: 0.000591,
                            invocationCounts: { score: Long('2') },
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
                                gte: Long('3'),
                                lte: Long('3'),
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
                      millisElapsed: 0.310251,
                      invocationCounts: {
                        createWeight: Long('1'),
                        createScorer: Long('40'),
                      },
                    },
                    match: {
                      millisElapsed: 0.027657,
                      invocationCounts: { refineRoughMatch: Long('45') },
                    },
                    score: {
                      millisElapsed: 0.00082,
                      invocationCounts: { score: Long('2') },
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
                            millisElapsed: 0.003839,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('14'),
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
                            millisElapsed: 0.002815,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('14'),
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
                            millisElapsed: 0.001946,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('14'),
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
                            millisElapsed: 0.212903,
                            invocationCounts: {
                              createWeight: Long('1'),
                              createScorer: Long('40'),
                            },
                          },
                          match: {
                            millisElapsed: 0.01455,
                            invocationCounts: { refineRoughMatch: Long('45') },
                          },
                          score: {
                            millisElapsed: 0.000352,
                            invocationCounts: { score: Long('2') },
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
                      millisElapsed: 0.314919,
                      invocationCounts: {
                        createWeight: Long('1'),
                        createScorer: Long('40'),
                      },
                    },
                    match: { millisElapsed: 0 },
                    score: {
                      millisElapsed: 0.03227,
                      invocationCounts: { score: Long('2') },
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
                                millisElapsed: 0.06529,
                                invocationCounts: {
                                  createWeight: Long('1'),
                                  createScorer: Long('39'),
                                },
                              },
                              match: {
                                millisElapsed: 0.001075,
                                invocationCounts: { nextDoc: Long('2') },
                              },
                              score: {
                                millisElapsed: 0.014032,
                                invocationCounts: { score: Long('2') },
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
                                millisElapsed: 0.141939,
                                invocationCounts: {
                                  createWeight: Long('1'),
                                  createScorer: Long('40'),
                                },
                              },
                              match: { millisElapsed: 0 },
                              score: {
                                millisElapsed: 0.014728,
                                invocationCounts: { score: Long('2') },
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
            millisElapsed: 0.139033,
            invocationCounts: {
              collect: Long('2'),
              competitiveIterator: Long('1'),
              setScorer: Long('13'),
            },
          },
          resourceUsage: {
            majorFaults: Long('2'),
            minorFaults: Long('0'),
            userTimeMs: Long('20'),
            systemTimeMs: Long('0'),
            reportingThreads: 1,
          },
        },
      },
      nReturned: Long('0'),
      executionTimeMillisEstimate: Long('23'),
    },
    {
      $_internalSearchIdLookup: {},
      nReturned: Long('0'),
      executionTimeMillisEstimate: Long('23'),
    },
    {
      $group: { _id: { $const: null }, count: { $sum: { $const: 1 } } },
      maxAccumulatorMemoryUsageBytes: { count: Long('0') },
      totalOutputDataSizeBytes: Long('0'),
      usedDisk: false,
      spills: Long('0'),
      nReturned: Long('0'),
      executionTimeMillisEstimate: Long('23'),
    },
    {
      $project: { count: true, _id: false },
      nReturned: Long('0'),
      executionTimeMillisEstimate: Long('23'),
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
              { equals: { path: 'qnsLevel', value: 3 } },
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
                                compound: {
                                  minimumShouldMatch: 1,
                                  should: [
                                    {
                                      text: {
                                        query: '1418',
                                        path: 'taxonomyData.subtopicId',
                                      },
                                    },
                                    {
                                      text: {
                                        query: '664',
                                        path: 'taxonomyData.subtopicId',
                                      },
                                    },
                                    {
                                      text: {
                                        query: '667',
                                        path: 'taxonomyData.subtopicId',
                                      },
                                    },
                                    {
                                      text: {
                                        query: '1416',
                                        path: 'taxonomyData.subtopicId',
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
    ],
    cursor: {},
    $db: 'qb',
  },
  ok: 1,
};
