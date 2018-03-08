
# Weighted Personality quiz 
Define personality types, create Q&A to weight them accordingly, show results per players' answers<br>
Create paths through Q&A via success images, related links, sponsor, and summary info.

### Question Options
Each question can have optional attributes to modify the display and handling:
* multi - supplies a Next button prompt, e.g. "multi": "Next >>"
* format - supplies a CSS class for the question, eg "format": "coolMatrix"

### "Type"
These attributes are tabulated from the type property of each answer.

An answer can have these types:
* "Indica"
* {Indica: 3}
* {Indica: 1, Sativa: -2}

The question answers can be formatted as follows:
```
{
    type: {"Sativa": 1, "Indica": -1},
    content: "Energetic",
    imageSrc: "https://twemoji.maxcdn.com/72x72/1f600.png"
},
```

## Get Started
Install dependencies in your project directory with:
### `npm install`

In the project directory, you can then run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
`build` is self-contained and deployable to "any" web server.<br>
Your app is ready to be deployed!
