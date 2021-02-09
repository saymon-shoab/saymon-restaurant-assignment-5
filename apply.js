const searchFood =() =>{
    const searchText =document.getElementById('input-field').value;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMeals(data.meals))
    }

 const displayMeals = meals=>{
     const mealsDiv  = document.getElementById('khabar')
     for (let i = 0; i < meals.length; i++) {
         const meal = meals[i];
         const div = document.createElement('div');
         div.innerHTML=`
          <div class="meal">
          <img class="imgSize" src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <div class="meal-info">
          <h3>${meal.strMeal}</h3>
          </div>
          </div>
          `;
         mealsDiv.appendChild(div);
        
     }
 }








            // const displayFood = foods =>{
            // const resultHeading =document.getElementById('result-heading');

            // for(let i=0; i<foods.length ; i++){
            //  const food=foods[i]
            // const mealDiv =document.getElementById('meals');
            // mealDiv.innerHTML=`
            // <div class="">
            // <div class="meal">
            // <img class="imgSize" src="${food.strMealThumb}" alt="${food.strMeal}">
            // <div class="meal-info">
            // <h3>${food.strMeal}</h3>
            // </div>
            // </div>
            // </div> `;

            // resultHeading.appendChild(mealDiv);

            // }
            // }    





// foods.forEach(food => {
//     const mealDiv =document.getElementById('meals');
//     mealDiv.innerHTML=`
//     <div class="">
//       <div class="meal">
//     <img class="imgSize" src="${food.strMealThumb}" alt="${food.strMeal}">
//     <div class="meal-info">
//      <h3>${food.strMeal}</h3>
//     </div>
//     </div>
//      </div> `;

//     resultHeading.appendChild(mealDiv);

//     } );