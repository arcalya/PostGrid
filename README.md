# Carousel
I want to make a production-ready, lightweight and fully customizable React carousel component that rocks supports multiple items and SSR(Server-side rendering)
## React-img-carousel
This component renders a carousel with support for lazy loading, autoplay, infinite scrolling, touch events and more.
![](\src\component\images\carrousel.gif)
## Installing
Clone the repository, run `npm i` and then run `npm start`. The Storybook should open in your browser automatically.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


```javascript
const socialMediaList={
            "ID": "1",
            "Titre": "Why is cat perfect for you",
            "body ": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Date": "19,05,2021",
            "Catégories": "Cat news",
            "Image":"./images/angrycat.jpg",
            "Extrait": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Readtime": "1",
            "Commentaires": "11",
            "Mise_en_avant": "NO"
        }
```

```javascript
const postData = () =>
    socialMediaList.map(s => (


        <div key={s.ID} className={`cardId${s.ID} cardId card_full`} style={{ backgroundImage: "url("+s.Image+")" }} viewportWidth="400px" cellPadding={ 5 }>
            <div className="card-body">
                <div className="post_categories"><a href="#" alt={s.Titre}>{s.Catégories}</a></div>
                <div className="post_title">{s.Titre}</div>
                <div>
                    <FontAwesomeIcon icon={faClock} />{s.Readtime} <FontAwesomeIcon icon={faCommentAlt} />{s.Commentaires}
                </div>

            </div>
        </div>



    ));
```
```javascript
<Slider
    dots={false}
    slidesToShow={3}
    slidesToScroll={3}
    autoplay={true}
    autoplaySpeed={5000}
    gap={'10px'}
    cover={true}
    isThumbs={true}
    arrows={true}
    fixedWidth={110}
    fixedHeight={70}
    >
{postData()}

</Slider>
```