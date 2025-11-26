fetch('data/products.json')
    .then(response => response.json())
    .then(products => {
        const grid = document.getElementById('product-grid');
        //render function
        function renderProducts(list) {
            grid.innerHTML = ""; //clear 

            list.forEach(item =>{
                const card = document.createElement('div');
            
                card.classList.add(
                'bg-white', 'p-5', 'rounded-xl', 'shadow-md', 'hover:shadow-xl', 'transition-all', 'duration-300', 'text-center'
            );
            
   card.innerHTML = `
    <img src="${item.image}" alt="${item.name}"
    class="w-full h-56 object-cover rounded-lg mb-4">

    <h3 class="text-xl font-semibold mb-1">${item.name}</h3>

    <p class="text-sm text-gray-500 mb-1">${item.shade}</p>

    <p class="text-[#C8A27E] font-bold text-lg mb-2">${item.price}</p>

    <p class="text-sm text-gray-600">${item.description}</p>
    
`;

            grid.appendChild(card);


        });
        }
        // initial load 
        renderProducts(products);

        //filter buttton
        document.querySelectorAll('.filter-btn').forEach(btn =>{
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;

                const filtered = category === "All"
                ? products 
                : products.filter(item => item.category === category);

                renderProducts(filtered);
                });
            });
    })
    .catch(error => console.error('Error loading Products:', error));