const projects = [
    {
        title: "F1 Website",
        description: "A website featuring F1 race results and statistics",
        imgSrc: "./assets/img/f1-website.png",
        link: "https://f1-website.onrender.com"
    },
    {
        title: "Movie Ratings",
        description: "A rating movies platform integrated with the OMDb API",
        imgSrc: "./assets/img/movie-ratings.png",
        link: "https://movie-rating-fff9.onrender.com/"
    },
    {
        title: "Recipe Blog",
        description: "A family sharing cooking recipes blog",
        imgSrc: "./assets/img/recipe-blog.png",
        link: "https://recipe-blog-ljhq.onrender.com"
    },
    {
        title: "Lexitcom App",
        description: "A sitcom quiz app featuring interactive user interfaces using Kotlin",
        imgSrc: "./assets/img/lexitcom.png",
        link: "https://github.com/yair-shtern/Lexitcom-App"
    },
    {
        title: "Memory Game",
        description: "An Android game app with custom logic and UI using Kotlin",
        imgSrc: "./assets/img/memory-game.png",
        link: "https://github.com/yair-shtern/MyMemoryGame"
    },
    {
        title: "TinDog",
        description: "HTML & CSS for Tinder app for dogs",
        imgSrc: "./assets/img/tindog.png",
        link: "https://yair-shtern.github.io/TinDog/"
    },
    {
        title: "A Hotel",
        description: "UX/UI design for a luxury hotel website",
        imgSrc: "./assets/img/hotel.png",
        link: "https://1vcbwbfnh9w3pwlegp5una.my.canva.site/"
    },
    {
        title: "Mondrian",
        description: "A Mondrian image - HTML & CSS only",
        imgSrc: "./assets/img/mondrian.png",
        link: "https://yair-shtern.github.io/Mondrian/"
    }
];

const carouselItemsContainer = document.getElementById('carouselItems');

projects.forEach((project, index) => {
    const isActive = index === 0 ? 'active' : '';
    const carouselItem = `
        <div class="carousel-item ${isActive}">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow-sm rounded-4">
                        <img class="card-img-top" src="${project.imgSrc}" alt="${project.title}" style="height: 250px; object-fit: cover;">
                        <div class="card-body text-center d-flex flex-column" style="height: 150px;">
                            <h3 class="title mb-2">${project.title}</h3>
                            <div style="flex: 1; min-height: 0;">
                                <p class="card-text" style="margin-bottom: 1rem;">${project.description}</p>
                            </div>
                            <div class="mt-auto" style="padding-bottom: 0.5rem;">
                                <a href="${project.link}" class="btn btn-sm btn-outline-secondary">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    carouselItemsContainer.innerHTML += carouselItem;
});
