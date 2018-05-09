var quizQuestions = [
  {
   // Game-wide values
  intro: "Products Used Within the Last month" , 
  scoreLabel: "Preference" , 
  relatedURL0: "https://games.gamepath.io/gamepath/qp/DOZO-chatback.html" , 
  relatedURLLabel0: "Claim your Gift!" ,
  relatedURL1: "" , 
  relatedURLLabel1: "" ,  
  relatedURL2: "" , 
  relatedURLLabel2: "" ,
  relatedURL3: "" , 
  relatedURLLabel3: "" ,  
    // Group 1
      question: "Which type of cannabis product have you used most recently?",
      multi: "Next »",
      format: "coolMatrix",
      imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/05/Insomnia-Woman.jpg?resize=300,200",
      soundSrc: "https://i1.theportalwiki.net/img/a/a5/Portal2_sfx_button_positive.m4a",
      answers: [
          {
              type: "Edibles",
              content: "Edibles This is a bunch of extra text so things wrap like so",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/05/Insomnia-Woman.jpg?resize=300,200"
          },
          {
              type: "Smoking",
              content: "Flower / Smoking",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/05/woman-anxiety-300.gif?resize=300,200"
          },
		  {
              type: "Vaping",
              content: "Vaping",
              imageSrc: "https://i0.wp.com/extroverting.com/wp-content/uploads/sites/3/2017/06/TinaFey-Self-HighFive.gif?resize=300,200"
          },
          {
              type: "Dabbing",
              content: "Dabbing",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/04/Muscles-Back-Shoulders-Illustration.jpg?resize=300,200"
          },
          {
              type: "Topicals",
              content: "Topicals, Lotions, or Ointments",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/04/Muscles-Back-Shoulders-Illustration.jpg?resize=300,200"
          },
      ]
  },
  {
      question: "Pick all the effects you'd like to achieve",
      multi: "Next »",
      format: "coolMatrix",
      answers: [
          {
              type: "Sativa",
              content: "Euphoric",
              imageSrc: "https://twemoji.maxcdn.com/72x72/1f600.png"
          },
          {
              type: "Sativa",
              content: "Relaxed",
              imageSrc: "https://twemoji.maxcdn.com/72x72/1f600.png"
          },
          {
              type: "Sativa",
              content: "Hungry",
              imageSrc: "https://twemoji.maxcdn.com/72x72/1f600.png"
          },
          {
              type: "Sativa",
              content: "Creative",
              imageSrc: "https://twemoji.maxcdn.com/72x72/1f600.png"
          },
          {
              type: {"Sativa": 1, "Indica": -1},
              content: "Energetic",
              imageSrc: "https://twemoji.maxcdn.com/72x72/1f600.png"
          },
          {
              type: "Indica",
              content: "Focused",
              imageSrc: "https://twemoji.maxcdn.com/72x72/1f610.png"
          }
      ]
  },
  {
    // Group 1
      question: "Which type of cannabis product have you used most frequently?",
      imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/05/Insomnia-Woman.jpg?resize=300,200",
      answers: [
          {
              type: "Edibles",
              content: "Edibles"
          },
          {
              type: "Smoking",
              content: "Flower / Smoking",
          },
		  {
              type: "Vaping",
              content: "Vaping",
          },
          {
              type: "Dabbing",
              content: "Dabbing",
          },
          {
              type: "Topicals",
              content: "Topicals, Lotions, or Ointments",
          },
      ]
  },
  {
	// Group 1
      question: "Which type of cannabis product do you generally prefer best?",
      answers: [
          {
              type: "Edibles",
              content: "Edibles",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/05/Insomnia-Woman.jpg?resize=300,200"
          },
          {
              type: "Smoking",
              content: "Flower / Smoking",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/05/woman-anxiety-300.gif?resize=300,200"
          },
		  {
              type: "Vaping",
              content: "Vaping",
              imageSrc: "https://i0.wp.com/extroverting.com/wp-content/uploads/sites/3/2017/06/TinaFey-Self-HighFive.gif?resize=300,200"
          },
          {
              type: "Dabbing",
              content: "Dabbing",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/04/Muscles-Back-Shoulders-Illustration.jpg?resize=300,200"
          },
          {
              type: "Topicals",
              content: "Topicals, Lotions, or Ointments",
              imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2017/04/Muscles-Back-Shoulders-Illustration.jpg?resize=300,200"
          },
      ]
  },
];

export default quizQuestions;