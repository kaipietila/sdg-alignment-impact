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
            res[duplicateIndex].alignment = Math.round((res[duplicateIndex].alignment + curr.alignment) / 2)
            return [...res]
        } 
        return [...res, curr]
    }, []);
    console.log(getCompanyAlignments)
    return getCompanyAlignments
}

const calculateSDGAlignment = (companyData) => {
    alignmentStore = stores.alignmentStore
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
        return mergedCompanyAlignments
    }
    return companyAlignments
};   

exports.calculateSDGAlignment = calculateSDGAlignment;