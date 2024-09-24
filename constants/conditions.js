// Define condition details without using TypeScript-specific type annotations
const conditionDetails = {
    Diabetes: {
        description: "A chronic condition affecting how your body processes blood sugar.",
        types: ["Type 1", "Type 2"],
        nutrition: "Low in sugar, balanced carbohydrates.",
        recommendedFoods: ["Whole grains", "Legumes", "Vegetables"],
        resources: ["American Diabetes Association", "Diabetes UK"],
    },
    Hypertension: {
        description: "High blood pressure that can lead to heart disease.",
        types: ["Primary", "Secondary"],
        nutrition: "Low sodium, rich in potassium.",
        recommendedFoods: ["Leafy greens", "Berries", "Beets"],
        resources: ["American Heart Association"],
    },
    // Add more condition details as needed
};

const conditions = [
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Cholesterol Management",
    "Obesity",
    "Asthma",
    "Celiac Disease",
    "Irritable Bowel Syndrome",
    "Gastroesophageal Reflux Disease",
    "Kidney Disease",
    "Liver Disease",
    "Anemia",
    "Thyroid Disorders",
    "Osteoporosis",
    "Chronic Fatigue Syndrome",
    "Food Allergies",
    "Arthritis",
    "Skin Conditions",
    "Cancer Recovery",
    "Menopause-related Issues"
];

export { conditionDetails, conditions };
