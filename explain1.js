const a = {
  explainVersion: '1',
  queryPlanner: {
    namespace: 'qb.questions',
    indexFilterSet: false,
    parsedQuery: {
      '$and': [
        {
          customTags: {
            '$elemMatch': {
              '$and': [
                { tag_name: { '$eq': 'Q-REEL' } },
                { value: { '$eq': 'yes' } }
              ]
            }
          }
        },
        {
          taxonomyData: {
            '$elemMatch': {
              '$or': [
                {
                  '$and': [
                    { subtopicId: { '$eq': '1413' } },
                    { taxonomyId: { '$eq': '1703061260BO' } }
                  ]
                },
                {
                  '$and': [
                    { subtopicId: { '$eq': '664' } },
                    { taxonomyId: { '$eq': '1703061260BO' } }
                  ]
                },
                {
                  '$and': [
                    { subtopicId: { '$eq': '667' } },
                    { taxonomyId: { '$eq': '1703061260BO' } }
                  ]
                },
                {
                  '$and': [
                    { subtopicId: { '$eq': '1413' } },
                    { taxonomyId: { '$eq': '1703061260BO' } }
                  ]
                }
              ]
            }
          }
        },
        { qnsLevel: { '$eq': 3 } },
        { status: { '$eq': 2 } }
      ]
    },
    queryHash: '936FEC3E',
    planCacheKey: 'E3036C16',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      filter: {
        '$and': [
          {
            taxonomyData: {
              '$elemMatch': {
                '$or': [
                  {
                    '$and': [
                      { taxonomyId: { '$eq': '1703061260BO' } },
                      { subtopicId: { '$eq': '1413' } }
                    ]
                  },
                  {
                    '$and': [
                      { taxonomyId: { '$eq': '1703061260BO' } },
                      { subtopicId: { '$eq': '664' } }
                    ]
                  },
                  {
                    '$and': [
                      { taxonomyId: { '$eq': '1703061260BO' } },
                      { subtopicId: { '$eq': '667' } }
                    ]
                  },
                  {
                    '$and': [
                      { taxonomyId: { '$eq': '1703061260BO' } },
                      { subtopicId: { '$eq': '1413' } }
                    ]
                  }
                ]
              }
            }
          },
          {
            customTags: {
              '$elemMatch': {
                '$and': [
                  { tag_name: { '$eq': 'Q-REEL' } },
                  { value: { '$eq': 'yes' } }
                ]
              }
            }
          },
          { qnsLevel: { '$eq': 3 } },
          { status: { '$eq': 2 } }
        ]
      },
      inputStage: {
        stage: 'OR',
        inputStages: [
          {
            stage: 'IXSCAN',
            keyPattern: {
              'taxonomyData.taxonomyId': 1,
              'taxonomyData.subtopicId': 1,
              status: 1
            },
            indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
            isMultiKey: true,
            multiKeyPaths: {
              'taxonomyData.taxonomyId': [ 'taxonomyData' ],
              'taxonomyData.subtopicId': [ 'taxonomyData' ],
              status: []
            },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: {
              'taxonomyData.taxonomyId': [ '["1703061260BO", "1703061260BO"]' ],
              'taxonomyData.subtopicId': [ '["1413", "1413"]' ],
              status: [ '[MinKey, MaxKey]' ]
            }
          },
          {
            stage: 'IXSCAN',
            keyPattern: {
              'taxonomyData.taxonomyId': 1,
              'taxonomyData.subtopicId': 1,
              status: 1
            },
            indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
            isMultiKey: true,
            multiKeyPaths: {
              'taxonomyData.taxonomyId': [ 'taxonomyData' ],
              'taxonomyData.subtopicId': [ 'taxonomyData' ],
              status: []
            },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: {
              'taxonomyData.taxonomyId': [ '["1703061260BO", "1703061260BO"]' ],
              'taxonomyData.subtopicId': [ '["664", "664"]' ],
              status: [ '[MinKey, MaxKey]' ]
            }
          },
          {
            stage: 'IXSCAN',
            keyPattern: {
              'taxonomyData.taxonomyId': 1,
              'taxonomyData.subtopicId': 1,
              status: 1
            },
            indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
            isMultiKey: true,
            multiKeyPaths: {
              'taxonomyData.taxonomyId': [ 'taxonomyData' ],
              'taxonomyData.subtopicId': [ 'taxonomyData' ],
              status: []
            },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: {
              'taxonomyData.taxonomyId': [ '["1703061260BO", "1703061260BO"]' ],
              'taxonomyData.subtopicId': [ '["667", "667"]' ],
              status: [ '[MinKey, MaxKey]' ]
            }
          },
          {
            stage: 'IXSCAN',
            keyPattern: {
              'taxonomyData.taxonomyId': 1,
              'taxonomyData.subtopicId': 1,
              status: 1
            },
            indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
            isMultiKey: true,
            multiKeyPaths: {
              'taxonomyData.taxonomyId': [ 'taxonomyData' ],
              'taxonomyData.subtopicId': [ 'taxonomyData' ],
              status: []
            },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: {
              'taxonomyData.taxonomyId': [ '["1703061260BO", "1703061260BO"]' ],
              'taxonomyData.subtopicId': [ '["1413", "1413"]' ],
              status: [ '[MinKey, MaxKey]' ]
            }
          }
        ]
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 168,
    totalKeysExamined: 19578,
    totalDocsExamined: 16623,
    executionStages: {
      stage: 'FETCH',
      filter: {
        '$and': [
          {
            taxonomyData: {
              '$elemMatch': {
                '$or': [
                  {
                    '$and': [
                      { taxonomyId: { '$eq': '1703061260BO' } },
                      { subtopicId: { '$eq': '1413' } }
                    ]
                  },
                  {
                    '$and': [
                      { taxonomyId: { '$eq': '1703061260BO' } },
                      { subtopicId: { '$eq': '664' } }
                    ]
                  },
                  {
                    '$and': [
                      { taxonomyId: { '$eq': '1703061260BO' } },
                      { subtopicId: { '$eq': '667' } }
                    ]
                  },
                  {
                    '$and': [
                      { taxonomyId: { '$eq': '1703061260BO' } },
                      { subtopicId: { '$eq': '1413' } }
                    ]
                  }
                ]
              }
            }
          },
          {
            customTags: {
              '$elemMatch': {
                '$and': [
                  { tag_name: { '$eq': 'Q-REEL' } },
                  { value: { '$eq': 'yes' } }
                ]
              }
            }
          },
          { qnsLevel: { '$eq': 3 } },
          { status: { '$eq': 2 } }
        ]
      },
      nReturned: 1,
      executionTimeMillisEstimate: 109,
      works: 19582,
      advanced: 1,
      needTime: 19580,
      needYield: 0,
      saveState: 20,
      restoreState: 20,
      isEOF: 1,
      docsExamined: 16623,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'OR',
        nReturned: 16623,
        executionTimeMillisEstimate: 32,
        works: 19582,
        advanced: 16623,
        needTime: 2958,
        needYield: 0,
        saveState: 20,
        restoreState: 20,
        isEOF: 1,
        dupsTested: 19578,
        dupsDropped: 2955,
        inputStages: [
          {
            stage: 'IXSCAN',
            nReturned: 2955,
            executionTimeMillisEstimate: 3,
            works: 2956,
            advanced: 2955,
            needTime: 0,
            needYield: 0,
            saveState: 20,
            restoreState: 20,
            isEOF: 1,
            keyPattern: {
              'taxonomyData.taxonomyId': 1,
              'taxonomyData.subtopicId': 1,
              status: 1
            },
            indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
            isMultiKey: true,
            multiKeyPaths: {
              'taxonomyData.taxonomyId': [ 'taxonomyData' ],
              'taxonomyData.subtopicId': [ 'taxonomyData' ],
              status: []
            },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: {
              'taxonomyData.taxonomyId': [ '["1703061260BO", "1703061260BO"]' ],
              'taxonomyData.subtopicId': [ '["1413", "1413"]' ],
              status: [ '[MinKey, MaxKey]' ]
            },
            keysExamined: 2955,
            seeks: 1,
            dupsTested: 2955,
            dupsDropped: 0
          },
          {
            stage: 'IXSCAN',
            nReturned: 8506,
            executionTimeMillisEstimate: 21,
            works: 8507,
            advanced: 8506,
            needTime: 0,
            needYield: 0,
            saveState: 20,
            restoreState: 20,
            isEOF: 1,
            keyPattern: {
              'taxonomyData.taxonomyId': 1,
              'taxonomyData.subtopicId': 1,
              status: 1
            },
            indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
            isMultiKey: true,
            multiKeyPaths: {
              'taxonomyData.taxonomyId': [ 'taxonomyData' ],
              'taxonomyData.subtopicId': [ 'taxonomyData' ],
              status: []
            },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: {
              'taxonomyData.taxonomyId': [ '["1703061260BO", "1703061260BO"]' ],
              'taxonomyData.subtopicId': [ '["664", "664"]' ],
              status: [ '[MinKey, MaxKey]' ]
            },
            keysExamined: 8506,
            seeks: 1,
            dupsTested: 8506,
            dupsDropped: 0
          },
          {
            stage: 'IXSCAN',
            nReturned: 5162,
            executionTimeMillisEstimate: 5,
            works: 5163,
            advanced: 5162,
            needTime: 0,
            needYield: 0,
            saveState: 20,
            restoreState: 20,
            isEOF: 1,
            keyPattern: {
              'taxonomyData.taxonomyId': 1,
              'taxonomyData.subtopicId': 1,
              status: 1
            },
            indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
            isMultiKey: true,
            multiKeyPaths: {
              'taxonomyData.taxonomyId': [ 'taxonomyData' ],
              'taxonomyData.subtopicId': [ 'taxonomyData' ],
              status: []
            },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: {
              'taxonomyData.taxonomyId': [ '["1703061260BO", "1703061260BO"]' ],
              'taxonomyData.subtopicId': [ '["667", "667"]' ],
              status: [ '[MinKey, MaxKey]' ]
            },
            keysExamined: 5162,
            seeks: 1,
            dupsTested: 5162,
            dupsDropped: 0
          },
          {
            stage: 'IXSCAN',
            nReturned: 2955,
            executionTimeMillisEstimate: 3,
            works: 2956,
            advanced: 2955,
            needTime: 0,
            needYield: 0,
            saveState: 20,
            restoreState: 20,
            isEOF: 1,
            keyPattern: {
              'taxonomyData.taxonomyId': 1,
              'taxonomyData.subtopicId': 1,
              status: 1
            },
            indexName: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
            isMultiKey: true,
            multiKeyPaths: {
              'taxonomyData.taxonomyId': [ 'taxonomyData' ],
              'taxonomyData.subtopicId': [ 'taxonomyData' ],
              status: []
            },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: {
              'taxonomyData.taxonomyId': [ '["1703061260BO", "1703061260BO"]' ],
              'taxonomyData.subtopicId': [ '["1413", "1413"]' ],
              status: [ '[MinKey, MaxKey]' ]
            },
            keysExamined: 2955,
            seeks: 1,
            dupsTested: 2955,
            dupsDropped: 0
          }
        ]
      }
    }
  },
  command: {
    find: 'questions',
    filter: {
      customTags: { '$elemMatch': { tag_name: 'Q-REEL', value: 'yes' } },
      status: 2,
      qnsLevel: 3,
      taxonomyData: {
        '$elemMatch': {
          '$or': [
            { taxonomyId: '1703061260BO', subtopicId: '1413' },
            { taxonomyId: '1703061260BO', subtopicId: '664' },
            { taxonomyId: '1703061260BO', subtopicId: '667' },
            { taxonomyId: '1703061260BO', subtopicId: '1413' }
          ]
        }
      }
    },
    hint: 'taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1',
    '$db': 'qb'
  },
 
  ok: 1,
  operationTime: Timestamp({ t: 1720510757, i: 2 })
}