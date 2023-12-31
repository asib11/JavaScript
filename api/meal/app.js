const loadData = foodName =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(response => response.json())
    .then(data => mealLoad(data.meals))
};

const mealLoad = meals =>{
    // step 1: meal container
    const mealcontainer = document.getElementById('meal-container');
    mealcontainer.innerText = '';
    meals.forEach(meal =>{
        // step 2: create child element
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        //step 3: set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadMealDetailsAsync(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                </button>
            </div>
            
        </div>
        
        `;
        //step 4: append 
        mealcontainer.append(mealDiv);
    })
};

const searchMeal = () =>{
    const searchText = document.getElementById('search-text').value ;
    loadData(searchText);
};

// fetch function part of loadDetails

const loadMealDetails = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error => console.log(error));
};

//async await part of loadDetails

const loadMealDetailsAsync = async idMeal =>{
    try{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        const response = await fetch(url);
        const data = await response.json();
        displayMealDetails(data.meals[0]);
    }catch(error){
        console.log('find some error');
        console.log(error);
    }
};

const displayMealDetails = meal =>{
    console.log(meal)
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const body = document.getElementById('mealDetailsBody');
    body.innerHTML = `
    <img src="${meal.strMealThumb}" class="img-fluid" alt="...">
    <p><b>Area:</b> ${meal.strArea}</p>
    <p><b>Catagory:</b> ${meal.strCategory}</p>
    <p>${meal.strInstructions}</p>
    <p><b>Youtube Link:</b><a href=${meal.strYoutube} target="_blank">${meal.strYoutube}</a></p>
    `;

}

loadData('fish');