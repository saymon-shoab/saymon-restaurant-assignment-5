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






