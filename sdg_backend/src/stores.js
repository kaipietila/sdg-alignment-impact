const sdgMapping = {
    1: "No Poverty",
    2: "Zero Hunger",
    3: "Good Health and Well-being",
    4: "Quality Education",
    5: "Gender Equality",
    6: "Clean Water and Sanitation",
    7: "Affordable and Clean Energy",
    8: "Decent Work and Economic Growth",
    9: "Industry, Innovation and Infrastructure",
    10: "Reduced Inequality",
    11: "Sustainable Cities and Communities",
    12: "Responsible Consumption and Production",
    13: "Climate Action",
    14: "Life Below Water",
    15: "Life on Land",
    16: "Peace and Justice Strong Institutions",
    17: "Partnerships to achieve the Goal"
}
const alignmentMapping = {
    "2": "strongly aligned",
    "1": "aligned",
    "-1": "misaligned",
    "-2": "strongly misaligned"
}
const industryHierarchy = {
    fishing: ['tuna', 'fishFarming'],
    mining: ['gold', 'aluminium']
    }

const alignmentStore = {
    fishing: [
        {'goal': 1, 'alignment' : "2"},
        {'goal': 2, 'alignment' : "1"},
        {'goal': 3, 'alignment' : "2"},
        {'goal': 4, 'alignment' : "-1"},
        {'goal': 5, 'alignment' : "2"},
        {'goal': 6, 'alignment' : "-2"},
        {'goal': 7, 'alignment' : "2"},
        {'goal': 8, 'alignment' : "1"},
        {'goal': 9, 'alignment' : "-1"},
        {'goal': 10, 'alignment' : "2"},
        {'goal': 11, 'alignment' : "-2"},
        {'goal': 12, 'alignment' : "-2"},
        {'goal': 13, 'alignment' : "-2"},
        {'goal': 14, 'alignment' : "-2"},
        {'goal': 15, 'alignment' : "2"},
        {'goal': 16, 'alignment' : "-1"},
        {'goal': 17, 'alignment' : "2"}
    ],
    tuna: [],
    fishFarming: [
        {'goal': 11, 'alignment' : "2"},
        {'goal': 14, 'alignment' : "-1"}
    ],
}

exports.alignmentMapping = alignmentMapping;
exports.alignmentStore = alignmentStore;
exports.industryHierarchy = industryHierarchy;
exports.sdgMapping = sdgMapping;

function newFunction() {
    return 1;
}
