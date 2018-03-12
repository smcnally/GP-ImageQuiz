var quizQuestions = [
  {
   // Game-wide values
  intro: "Participation in News Conversations" ,
  scoreLabel: "Community Persona" , 
  relatedURL0: "https://guides.coralproject.net/start-here" , 
  relatedURLLabel0: "We offer collection of guides -- gratis -- to help newsrooms engage and get the most out of the community." ,
  relatedURL1: "https://guides.coralproject.net/start-here" , 
  relatedURLLabel1: "" ,  
  relatedURL2: "https://tinyletter.com/coralproject" , 
  relatedURLLabel2: "Sign up to get updates and to be entered to win swag" ,
  relatedURL3: "" , 
  relatedURLLabel3: "" ,  
// Group 1
      question: "What's your main motivation to partipate in news discussions online?",
      answers: [
          {
              type: {ego: 1, Courtney: 2, Adeline: 1},
              content: "I like collecting Karma and Upvotes",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Shaq-Upvotes.gif?fit=300,200"
          },
          {
              type: {ego: 1, Adeline: 2, Larry: 1},
              content: "Sharing my ideas in topics of interest",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Share_Ideas-350x198.gif?fit=300,200"
          },
		  {
              type: {adjacency: -1, Courtney: -1},
              content: "Letting authors know I'm listening is a way I give back",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Listening-Poe_raven.jpg?fit=300,200"
          },
          {
              type: "revenue",
              content: "My monthly stipend from the Kremlin depends on it",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/07/Money-FlippingThrough50s.gif?resize=300"
          },
      ]
  },
{
    question: "What's your favorite type of response to your participation?",
    answers: [
        {
            type: {ego: 1, Courtney: 1, Adeline: 1, Edie: 2},
            content: "When I see my comment has been shared or upvoted",
            imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Upvotes-Napolean_Dynamite_Chip.gif?resize=300"
        },
        {
            type: {adjacency: 1, Courtney: 1},
            content: "Getting a response from the article author",
            imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Newspaper_Excited-Animated.gif?resize=300"
        },
        {
            type: {ego: 1, Courtney: 1, Edie: 2},
            content: "When I get replies from others",
            imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Two_Speaking.jpg?resize=300"
        },
        {
            type: "revenue",
            content: "When the site contacts me with a paid assignment",
            imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/07/Money-OneBillionDollarNote-768x511.jpg?resize=300,200"
        },
    ]
},
{
question: "What else could your preferred news & information communities do to encourage you to participate more actively and regularly?",
answers: [
    {
        type: {ego: 1, Courtney: 1, Edie: 2},
        content: "Highlight my comment in the discussion stream",
        imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Community_Work.jpg?resize=300,200"
    },
    {
        type: {adjacency: 1, Courtney: 1, Edie: 1},
        content: "Feature my comment next to the main article",
        imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Newspaper_Smile-350x196.gif?resize=300,200"
    },
    {
        type: {ego: 1, Courtney: 2, Edie: 1},
        content: "Allow me to moderate others' comments",
        imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Coral-Referees.jpg?resize=300,200"
    },
    {
        type: "revenue",
        content: "Offer me a freelance position",
        imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/07/MattressOfMoney-BreakingBad-sm.gif?resize=300,200"
    },
]
},
];

export default quizQuestions;