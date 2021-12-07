const stores = require ('./stores');

const mergeAlignments = (alignments) => {
    // If there are multiple reveneue objects we need to merge them to get a 
    // company wide alignment. E.g. we get the mean of multiple alignments and round
    // the result e.g. strongly aligned + misaligned = aligned
    const flattenAlignments = alignments.reduce((res, curr) => {
        return res.concat(curr)
    }, []);
    const getCompanyAlignments = flattenAlignments.reduce((res, curr) => {
        const duplicateIndex = res.findIndex((alignment) => alignment.goal === curr.goal)
        if (duplicateIndex !== -1) {
            res[duplicateIndex].alignment = string(Math.round((parseInt(res[duplicateIndex].alignment) + parseInt(curr.alignment)) / 2))
            return [...res]
        } 
        return [...res, curr]
    }, []);
    return getCompanyAlignments
}

const enrichAlignmentData = (companyAlignments) => {
    enriched = companyAlignments.reduce((result, alignment) => {
        goal = stores.sdgMapping[alignment.goal]
        verbose = stores.alignmentMapping[alignment.alignment]
        return [...result, {'goal': goal, 'alignment': alignment.alignment, 'verbose': verbose}]
    }, []);
    return enriched
}

const calculateSDGAlignment = (companyData) => {
    const alignmentStore = stores.alignmentStore
    let alignments;
    // Get alignment for each goal for a revenue source the company chooses.
    // If alignment for revenue source is not specified we will use parent alignment.
    // Get mean alignment for all revenue sources which is the company alignment.
    const companyAlignments = companyData.revenueSources.map((source) => {
        let parent;
        let subsource;
        [parent, subsource] = source.split('.')
        const sourceAlignments = alignmentStore[subsource]
        if (sourceAlignments.length <= 17) {
            const parentAlignments = [...alignmentStore[parent]]
            const sourceSpecifiedGoals = sourceAlignments.map((goal) => goal.goal)
            parentMerged = [...parentAlignments.filter((goal) => !sourceSpecifiedGoals.includes(goal.goal)), 
                ...sourceAlignments]
            return parentMerged
        } else {
            return sourceAlignments
        }
    });
    if (companyAlignments.length > 1) {
        mergedCompanyAlignments = mergeAlignments(companyAlignments)
        alignments = enrichAlignmentData(mergedCompanyAlignments)
    }
    alignments = enrichAlignmentData(companyAlignments[0])
    console.log(alignments)
    return alignments
};   

exports.calculateSDGAlignment = calculateSDGAlignment;