db.questions
  .find({
    customTags: { $elemMatch: { tag_name: 'Q-REEL', value: 'yes' } },
    status: 2,
    qnsLevel: 2,
    $or: [
      { 'taxonomyData.taxonomyId': '1703061260BO', 'taxonomyData.subtopicId': '1418' },
      { 'taxonomyData.taxonomyId': '1703061260BO', 'taxonomyData.subtopicId': '664' },
      { 'taxonomyData.taxonomyId': '1703061260BO', 'taxonomyData.subtopicId': '664' },
      { 'taxonomyData.taxonomyId': '1703061260BO', 'taxonomyData.subtopicId': '1416' },
      { 'taxonomyData.taxonomyId': '1703061260BO', 'taxonomyData.subtopicId': '456' },
      { 'taxonomyData.taxonomyId': '1703061260BO', 'taxonomyData.subtopicId': '231' },
      { 'taxonomyData.taxonomyId': '1703061260BO', 'taxonomyData.subtopicId': '456' },
      { 'taxonomyData.taxonomyId': '1703061260BO', 'taxonomyData.subtopicId': '1416' },
    ],
  })
  .explain('executionStats');
