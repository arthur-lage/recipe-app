let apiurl = "https://www.themealdb.com/api/json/v1/1/random.php"
let btn = document.getElementById("new-recipe-button")
let cardContainer = document.getElementById('card-container')
let videourl = "https://www.youtube.com/embed/"

async function getRandomRecipeFromAPI(){
    let resp = await fetch(apiurl)
    let respData = await resp.json()

    console.log(respData)

    const card = `
    <div id="card">
        <h1>${respData.meals[0].strMeal}</h1>
        <h3>${respData.meals[0].strArea}</h3>
        <h3>${respData.meals[0].strCategory}</h3>
        <div id="food-image-div">
            <img src="${respData.meals[0].strMealThumb}" alt="${respData.meals[0].strMeal}"/>
        </div>

        <h3>Recipe Video: </h3>
        <div id="recipe-video">
            <iframe id="iframe" width="420" allowfullscreen height="320" src="${videourl + respData.meals[0].strYoutube.slice(32, respData.meals[0].strYoutube.length)}"></iframe>
        </div>
    </div>
    `
    
    cardContainer.innerHTML = card
}

btn.addEventListener('click', () => {

    getRandomRecipeFromAPI()

})