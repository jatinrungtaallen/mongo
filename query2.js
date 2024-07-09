db.questions  .find({
    customTags: { $elemMatch: { tag_name: 'Q-REEL', value: 'yes' } },
    status: 2,
    qnsLevel: 2,
    taxonomyData: {
      $elemMatch: {
        $or: [
          { taxonomyId: '1703061260BO', subtopicId: '1418' },
          { taxonomyId: '1703061260BO', subtopicId: '667' },
          { taxonomyId: '1703061260BO', subtopicId: '1416' },
          { taxonomyId: '1703061260BO', subtopicId: '664' },
        ],
      },
    },
  }).hint("taxonomyData.taxonomyId_1_taxonomyData.subtopicId_1_status_1_qnsLevel_1").explain('executionStats');
