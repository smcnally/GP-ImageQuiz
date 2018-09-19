var quizQuestions = [
    {
        // Game-wide values
        intro: "CBD Dosage Calculator",
        scoreLabel: "Preference",
        // relatedURL0: "https://games.gamepath.io/gamepath/qp/DOZO-chatback.html",
        // relatedURLLabel0: "Learn more benefits & Take Control of your Experience",
        relatedURL1: "https://www.medicalnewstoday.com/articles/319475.php",
        relatedURLLabel1: "Does CBD oil work for chronic pain management?",
        relatedURL2: "https://www.projectcbd.org/guidance/cbd-users-manual",
        relatedURLLabel2: "CBD User’s Manual",
        relatedURL3: "https://lucentbotanicals.com/blogs/news/how-to-find-right-cbd-dose",
        relatedURLLabel3: "How to Find the Right CBD Dose for You",
        // Group 1
        question: "How much CBD should you take?",
        //soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/Bwip1-rise-analog-1_5sec.m4a",
        multiAnswerSoundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/Ahhh-AMBSPH_012.m4a",
        answers: [
            {
                type: "Average",
                content: "Answer these simple questions and get our best recommendation.",
                imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/08/Lucent_Logo-With_Background-400x350.png?w=250"
            },
        ]
    },
    {
        // Group 1
          question: "No surprise, smaller people tend to need less CBD to get the same effect. So what’s your weight range?",
          imageSrc: "",
          //soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/Bwip1-rise-analog-1_5sec.m4a",
          answers: [
              {
                type: { "Novice": 1,  "Sensitive": 0 },
                content: "Under 110 lbs (50 kg)",
                imageSrc: ""
              },
              {
                type: { "Novice": 1,  "Sensitive": 0 },
                content: "110 - 150 lbs (50 - 70 kg)",
                imageSrc: ""
              },
              {
                type: { "Average": 1, "Heavy": 1 },
                content: "150 - 220 lbs (70 - 100 kg)",
                imageSrc: ""
              },
              {
                type: { "Average": 0, "Heavy": 1 },
                content: "More than 220 lbs (100 kg)",
                imageSrc: ""
            },
          ]
      },
    {
        // Group 1
        question: "How strong an effect are you looking for? For example, if you’re looking for pain relief, how severe is the pain? Or, if you are looking for a sense of calm, how anxious are you?",
        imageSrc: "",
        //soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/Ahhh-AMBSPH_012.m4a",
        answers: [
            {
                type: { "Novice": 0,  "Sensitive": 1 },
                content: "A small boost",
                imageSrc: ""
            },
            {
                type: { "Sensitive": 0, "Average": 1 },
                content: "A moderate but significant effect",

            },
            {
                type: { "Average": 0, "Heavy": 1 },
                content: "A strong effect",
                imageSrc: ""
            },
]
},
{
    // Group 1
    question: "Have you taken CBD before? If so, how sensitive to the effects did you feel? If not, we’ll start slow by assuming you’re more sensitive.",
    imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/08/Dog_Going_Upstairs_Backward.gif?w=250",
    //soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/Imptomb06-Tabla_Dolak.m4a",
    answers: [
        {
            type: { "Novice": 1,  "Sensitive": 1 },
            content: "Never taken CBD / More sensitive",
            imageSrc: ""
        },
        {
            type: { "Sensitive": 1, "Average": 1 },
            content: "Fairly sensitive",

        },
        {
            type: { "Average": 1, "Heavy": 0 },
            content: "Average",
            imageSrc: ""
        },
        {
            type: { "Average": 0, "Heavy": 1 },
            content: "Not sensitive",
            imageSrc: ""
        },
]
}
];

export default quizQuestions;