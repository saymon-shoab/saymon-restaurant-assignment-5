const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsElement = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_meal = document.getElementById('single-meal');

// search meal from api

function searchMeal(element) {
    element.preventDefault();

    single_meal.innerHTML='';
    const term = search.value;

    if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            resultHeading.innerHTML=`
             <h3>Search result for: ${term}</h3>
            `;
            if(data.meal===null){
                resultHeading.innerHTML=`<p> no result found </p>`
            }else{
             mealsElement.innerHTML= data.meals.map(meal => `
             <div class="meal">
             <img class="imgSize" src="${meal.strMealThumb}" alt="${meal.strMeal}">
             <div class="meal-info">
              <h3>${meal.strMeal}</h3>
             </div>
             </div>`
             )
             .join('');
            }
           

        });
        search.value = '' ;
    }else{
        alert('please enter a search term')
    }
}

// add eventListeners
submit.addEventListener('click', searchMeal);