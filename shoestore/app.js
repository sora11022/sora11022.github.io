var postAPI = 'https://api.shoe.gorokiapp.com/api/shoes?category=Sneaker&fbclid=IwAR3k8bnKbq_TFZoNR1muXbN0iGCxvwdkofsn9q9PDTpENjJ-wzwlcN6Skwk'
fetch(postAPI)
    .then(function(response) {
        return response.json();
        //json -> js type
    })
    .then(function(items){
        const htmls = items.map(function(item){
            return `
            <li>
                <img src ="${item.imageUrl}">
                <div class = "product-detail">
                    <h3>${item.name}</h3>
                    <div class="tag-price">
                        <p class="new-price">${"$" + item.price }</p>
                        <p class="old-price">${"$" + item.newPrice}</p>
                    </div>
                </div>
            </li>`;
        });
        const html = htmls.join('');
        document.getElementById('item-id').innerHTML = html;
    })
    .catch(function(error){
        console.log('error');
    });
