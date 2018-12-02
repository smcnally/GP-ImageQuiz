var quizQuestions = [
    {
        // Game-wide values
        intro: "CBD Dosage Calculator",
        scoreLabel: "<em>Your Best Life Is Inside</em>",
        // relatedURL0: "https://games.gamepath.io/gamepath/qp/DOZO-chatback.html",
        // relatedURLLabel0: "Learn more benefits & Take Control of your Experience",
        relatedURL1: "",
        relatedURLLabel1: "",
        relatedURL2: "",
        relatedURLLabel2: "",
        // relatedURL3: "https://lucentbotanicals.com/blogs/news/how-to-find-right-cbd-dose",
        // relatedURLLabel3: "How to Find the Right CBD Dose for You",
        // Group 1
        question: "Have you taken CBD before? If so, how sensitive to the effects did you feel?",
        imageSrc: "",
        // soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/AMBPC_026.m4a",
        answers: [
            {
                type: { "Novice": 1,  "Average": 1 },
                content: "I've never taken CBD",
                imageSrc: ""
            },
            {
                type: { "Novice": 0, "Average": 1 },
                content: "Moderately sensitive",

            },
            {
                type: { "Novice": -1, "Heavy": 1 },
                content: "Not particularly sensitive",
                imageSrc: ""
            },
]
},
    {
        // Group 1
        question: "Body size is another important factor. What's your weight range?",
        imageSrc: "",
        // soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/AMBPC_026.m4a",
        answers: [
            {
              type: { "Novice": 1,  "Average": 0 },
              content: "Under 110 lbs (50 kg)",
              imageSrc: ""
            },
            {
              type: { "Novice": 0,  "Average": 1 },
              content: "110 - 150 lbs (50 - 70 kg)",
              imageSrc: ""
            },
            {
              type: { "Average": 1, "Heavy": 1 },
              content: "150 - 220 lbs (70 - 100 kg)",
              imageSrc: ""
            },
            {
              type: { "Average": -1, "Heavy": 1 },
              content: "More than 220 lbs (100 kg)",
              imageSrc: ""
          },
        ]
    },
{
    // Group 1
    question: "How strong an effect are you looking for?",
    imageSrc: "",
    soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/Ahhh-AMBSPH_012.m4a",
    answers: [
        {
            type: { "Novice": 1,  "Average": 1 },
            content: "A small boost",
            imageSrc: ""
        },
        {
            type: { "Novice": -1, "Average": 1 },
            content: "A moderate but significant effect",

        },
        {
            type: { "Average": 0, "Heavy": 1 },
            content: "A strong effect",
            imageSrc: ""
        },
]
}
];

export default quizQuestions;