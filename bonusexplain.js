const a = {
  explainVersion: '1',
  queryPlanner: {
    namespace: 'qb.questions',
    indexFilterSet: false,
    parsedQuery: {
      $and: [
        {
          customTags: {
            $elemMatch: {
              $and: [{ tag_name: { $eq: 'Q-REEL' } }, { value: { $eq: 'yes' } }],
            },
          },
        },
        {
          taxonomyData: {
            $elemMatch: {
              $and: [
                { taxonomyId: { $eq: '1703061260BO' } },
                {
                  subtopicId: { $in: ['1416', '1418', '664', '667'] },
                },
              ],
            },
          },
        },
        { qnsLevel: { $eq: 2 } },
        { status: { $eq: 2 } },
      ],
    },
    queryHash: '8ACDF2C0',
    planCacheKey: '1A1AAB9A',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      filter: {
        $and: [
          {
            taxonomyData: {
              $elemMatch: {
                $and: [
                  { taxonomyId: { $eq: '1703061260BO' } },
                  {
                    subtopicId: { $in: ['1416', '1418', '664', '667'] },
                  },
                ],
              },
            },
          },
          {
            customTags: {
              $elemMatch: {
                $and: [{ tag_name: { $eq: 'Q-REEL' } }, { value: { $eq: 'yes' } }],
              },
            },
          },
        ],
      },
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: {
          'taxonomyData.taxonomyId': 1,
          'taxonomyData.subtopicId': 1,
          status: 1,
          qnsLevel: 1,
        },
        indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1_qnsLevel_1',
        isMultiKey: true,
        multiKeyPaths: {
          'taxonomyData.taxonomyId': ['taxonomyData'],
          'taxonomyData.subtopicId': ['taxonomyData'],
          status: [],
          qnsLevel: [],
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          'taxonomyData.taxonomyId': ['["1703061260BO", "1703061260BO"]'],
          'taxonomyData.subtopicId': ['["1416", "1416"]', '["1418", "1418"]', '["664", "664"]', '["667", "667"]'],
          status: ['[2, 2]'],
          qnsLevel: ['[2, 2]'],
        },
      },
    },
    rejectedPlans: [],
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 50,
    totalKeysExamined: 4901,
    totalDocsExamined: 4891,
    executionStages: {
      stage: 'FETCH',
      filter: {
        $and: [
          {
            taxonomyData: {
              $elemMatch: {
                $and: [
                  { taxonomyId: { $eq: '1703061260BO' } },
                  {
                    subtopicId: { $in: ['1416', '1418', '664', '667'] },
                  },
                ],
              },
            },
          },
          {
            customTags: {
              $elemMatch: {
                $and: [{ tag_name: { $eq: 'Q-REEL' } }, { value: { $eq: 'yes' } }],
              },
            },
          },
        ],
      },
      nReturned: 1,
      executionTimeMillisEstimate: 47,
      works: 4901,
      advanced: 1,
      needTime: 4899,
      needYield: 0,
      saveState: 5,
      restoreState: 5,
      isEOF: 1,
      docsExamined: 4891,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 4891,
        executionTimeMillisEstimate: 7,
        works: 4901,
        advanced: 4891,
        needTime: 9,
        needYield: 0,
        saveState: 5,
        restoreState: 5,
        isEOF: 1,
        keyPattern: {
          'taxonomyData.taxonomyId': 1,
          'taxonomyData.subtopicId': 1,
          status: 1,
          qnsLevel: 1,
        },
        indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1_qnsLevel_1',
        isMultiKey: true,
        multiKeyPaths: {
          'taxonomyData.taxonomyId': ['taxonomyData'],
          'taxonomyData.subtopicId': ['taxonomyData'],
          status: [],
          qnsLevel: [],
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          'taxonomyData.taxonomyId': ['["1703061260BO", "1703061260BO"]'],
          'taxonomyData.subtopicId': ['["1416", "1416"]', '["1418", "1418"]', '["664", "664"]', '["667", "667"]'],
          status: ['[2, 2]'],
          qnsLevel: ['[2, 2]'],
        },
        keysExamined: 4901,
        seeks: 10,
        dupsTested: 4891,
        dupsDropped: 0,
      },
    },
  },
  command: {
    find: 'questions',
    filter: {
      customTags: { $elemMatch: { tag_name: 'Q-REEL', value: 'yes' } },
      status: 2,
      qnsLevel: 2,
      taxonomyData: {
        $elemMatch: {
          taxonomyId: '1703061260BO',
          subtopicId: { $in: ['1418', '664', '667', '1416'] },
        },
      },
    },
    hint: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1_qnsLevel_1',
    $db: 'qb',
  },

  ok: 1,
  operationTime: Timestamp({ t: 1720517338, i: 5 }),
};
