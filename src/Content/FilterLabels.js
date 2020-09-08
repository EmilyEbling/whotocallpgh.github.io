const urgencyOptions = [
    { label: "Immediate Support", value: "Immediate" },
    { label: "Limited Hours Call Support", value: "Limited Hours" },
    { label: "24 Hour Call Support", value: "24/7" }
];

const typeOptions = [
    { label: "Pittsburgh Specific", value: "Pittsburgh" },
    { label: "Referral and Resource Hub", value: "Referral" },
    { label: "Mobile Unit and Possible Police", value: "Possible Police" },
    { label: "Crisis", value: "Crisis" },
    { label: "Medical", value: "Violence" },
    { label: "Mental Health", value: "Mental Health" },
    { label: "Violence", value: "Violence" },
    { label: "Housing", value: "Housing" },
    { label: "Harm Reduction", value: "Harm Reduction" },
    { label: "Houseless", value: "Houseless" },
    { label: "LGBTQ+", value: "LGBTQ+" },
    { label: "Families", value: "Families" },
    { label: "Youth", value: "Youth" },
    { label: "Elders", value: "Elders" },
    { label: "Anyone", value: "Anyone" }
];

const groupedOptions = [
    {
        label: "Urgency Status",
        options: urgencyOptions
    },
    {
        label: "Support Type",
        options: typeOptions
    }
];


export default groupedOptions;