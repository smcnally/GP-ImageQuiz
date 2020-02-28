var quizQuestions = [
    {
        // Game-wide values
        intro: "Which Brand is Yours?",
        scoreLabel: "<em>Your Brands</em>",
        // relatedURL0: "https://games.gamepath.io/gamepath/qp/DOZO-chatback.html",
        // relatedURLLabel0: "Learn more benefits & Take Control of your Experience",
        relatedURL1: "",
        relatedURLLabel1: "",
        relatedURL2: "",
        relatedURLLabel2: "",
        relatedURL3: "",
        relatedURLLabel3: "",
        // Group 1
        question: "Do you ever treat yourself to a joint/vape/dab or five?",
        // soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/AMBPC_026.m4a",
        multiAnswerSoundSrc: "",
        // imageSrc: "https://meanbusiness.com/wp-content/uploads/2018/01/Roller_Broad_City.gif??resize=220,125",
        imageSrc: "https://meanbusiness.com/wp-content/uploads/Roller_Broad_City.gif",
        answers: [
            {
                type: { "Medicine-seeker": 1,  "Parent": 1 },
                content: " I would like to more often",    
            },
            {
                type: { "Millenial": 1,  "cultured": 1 },
                content: "I do!",
                imageSrc: ""
              },
        ]
    },
    {
        // Group 1
        question: "Are you Experienced?",
        imageSrc: "https://meanbusiness.com/wp-content/uploads/Woman-Mouth-Smoke-300.gif?resize=200,200",
        //soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/AMBPC_026.m4a",
        //soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/Imptomb06-Tabla_Dolak.m4a",
        answers: [
            {
                type: { "Millennial": 1,  "Cultured": 1 },
                content: "I consume regularly",
                imageSrc: ""
            },
            {
                type: { "Medicine-seeker": 1,  "Parent": 1 },
                content:  "I've consumed in the past, but not in awhile",
    
            },
            {
                type: { "Parent": 1, "Medicine-seeker": 1 },
                content: "I'm looking to try",
                imageSrc: ""
            },
    ]
    },
    {
        // Group 1
          question: "What's your take on cannabis culture?",
          imageSrc: "",
          //soundSrc: "https://meanbusiness.com/gamepath/AmbientHits/fromCMMag/AMBPC_026.m4a",
          answers: [
              {
                type: { "Millennial": 1,  "Sensitive": 0 },
                content: "Cannabis is part of the culture, sure.",
                imageSrc: ""
              },
              {
                type: { "Medicine-seeker": 1,  "Parent": 1 },
                content: "It's like Medicine is part of the culture.",
                imageSrc: ""
              },
              {
                type: { "Millennial": 1, "cultured": 1 },
                content: "Like the Cocktail Culture?",
                imageSrc: ""
              },
          ]
      },
    {
        // Group 1
        question: "How strong an effect are you looking to achieve?",
        imageSrc: "",
        soundSrc: "https://meanbusiness.com/wp-content/uploads/sounds/SynthChordsCm11-PercTVOn.m4a",
        answers: [
            {
                type: { "Parent": 1,  "Medicine-seeker": 1 },
                content: "A small boost",
                imageSrc: ""
            },
            {
                type: { "Medicine-seeker": 1, "Millennial": 1 },
                content: "A moderate but significant effect",

            },
            {
                type: { "Millennial": 0, "cultured": 1 },
                content: "A strong effect",
                imageSrc: ""
            },
]
},
];

export default quizQuestions;