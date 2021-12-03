
sdgMapping = {
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
alignmentMapping = {
    1: "strongly aligned",
    2: "aligned",
    3: "misaligned",
    4: "strongly misaligned"
}

industryAlignments = {
    fishing: {
        alignments: {
            1: 2,
            2: 1,
            3: 2,
            4: 3,
            5: 1,
            6: 4,
            7: 2,
            8: 1,
            9: 3,
            10: 2,
            11: 4,
            12: 4,
            13: 4,
            14: 4,
            15: 2,
            16: 3,
            17: 2
        },
        subIndustry: {
            tuna: {},
            fishFarming: {
                11: 2,
                14: 3,
            }
        }
    }
}
