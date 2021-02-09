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
          <div onclick="moreFoodDetails('${meal.strMeal}')" class="meal">
          <img class="imgSize" src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <div class="meal-info">
          <h>${meal.strMeal}</h4>
          </div>
          </div>
          `;
         mealsDiv.appendChild(div);
        
     }
 }

 const moreFoodDetails =mealId =>{
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`
      fetch(url)
      .then(res=>res.json())
      .then(data=> renderFoodInfo(data.meals[0]));
 }

 const renderFoodInfo = show=>{
     console.log(show);
     const lookDiv=document.getElementById('lookDetails')
     lookDiv.innerHTML=`
     <div class="showDesign">
     <img class="imgSize" src="${show.strMealThumb}" alt="${show.strMeal}">
     <h5>${show.strMeal}</h5>
     <p>${show.strArea}</p>
     <p>${show.strInstructions}</p>
     </div>
     `
 }




