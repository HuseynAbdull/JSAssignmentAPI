function GetUsers(){
    fetch('https://fakestoreapi.com/products')
    .then(renponse => renponse.json())
    .then(data =>{
        let html = '';
       data.forEach(pr => {
        let pr_title = pr.title.length > 15 ? pr.title.slice(0,15) +"..." : pr.title
        let pr_name = pr.description.length > 30 ? pr.description.slice(0,30) +"..." :pr.description
        html += `
        <div class="col-lg-4 box">
        <div class="card">
            <img class="card-img-top" src=${pr.image} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${pr_title}</h5>
              <p class="card-text">${pr_name}</p>
              <a href="#" class="btn button">${pr.price} $</a>
            </div>
          </div>
    </div>
        `
       })
       document.getElementById('list').innerHTML = html;
    })
    
};

GetUsers();
