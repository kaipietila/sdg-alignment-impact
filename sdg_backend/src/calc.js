const stores = require ('./stores');

const mergeAlignments = (alignments) => {
    // If there are multiple reveneue objects we need to merge them to get a 
    // company wide alignment. E.g. we get the mean of multiple alignments and round
    // the result e.g. strongly aligned + misaligned = aligned
    const mergedAlignments = alignments.reduce((res, curr) => {
        if (!Object.keys(res).length) {
            const newRes = Object.assign(res, curr)
            return newRes
        } 
        const newRes = Object.entries(curr).reduce((acc, goal) => {
            if (acc[goal[0]]) {
                const mean = Math.round((acc[goal[0]] + goal[1]) / 2)
                acc[goal[0]] = mean
                console.log(mean)
            }
            return acc
        }, {...res})
        return newRes
    }, {})
    return mergedAlignments
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
        if (Object.keys(sourceAlignments).length <= 17) {
            const parentAlignment = {...alignmentStore[parent]}
            mergedAlignments = Object.assign(parentAlignment, sourceAlignments)
            return mergedAlignments
        } else {
            return sourceAlignments
        }
    });
    if (companyAlignments.length > 1) {
        mergedCompanyAlignments = mergeAlignments(companyAlignments)
        return mergedAlignments
    }
    return companyAlignments
};   

exports.calculateSDGAlignment = calculateSDGAlignment;