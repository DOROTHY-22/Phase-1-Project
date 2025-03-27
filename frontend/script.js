document.addEventListener('DOMContentLoaded', () => {
    const artSlider = document.getElementById('artSlider');
    const galleryPage = document.getElementById('galleryPage');
    const goHome = document.getElementById('goHome');
    const artContainer = document.getElementById('artContainer');
    const artistFilter = document.getElementById('artistFilter');
    const toggleViewButton = document.getElementById('toggleView');
    const navViewGallery = document.getElementById('navViewGallery');
    let artworks = [];

    // Fetch Artworks for the slider
    fetch('https://phase-1-project-backend.onrender.com/artworks')
        .then(response => response.json())
        .then(sliderArtworks => {
            sliderArtworks.forEach(artwork => {
                const img = document.createElement('img');
                img.src = artwork.image;
                img.alt = artwork.title;
                artSlider.appendChild(img);
            });
             artSlider.style.width = `${sliderArtworks.length * 540}px`;
        });

    // Fetch Artworks for the gallery page
    function fetchArtworks() {
        fetch('https://phase-1-project-backend.onrender.com/artworks')
            .then(response => response.json())
            .then(data => {
                artworks = data;
                displayArtworks(artworks);
            });
    }

    // Display Artworks in the gallery page
    function displayArtworks(artworksToDisplay) {
        artContainer.innerHTML = artworksToDisplay.map(artwork => `
            <div class="artwork">
                <img src="${artwork.image}" alt="${artwork.title}">
                <h2>${artwork.title}</h2>
                <p>Artist: ${artwork.artist}</p>
                <p>Location: ${artwork.location}</p>
            </div>
        `).join('');
    }

    // Filter by Artist
    artistFilter.addEventListener('input', () => {
        const artist = artistFilter.value.toLowerCase();
        const filteredArtworks = artworks.filter(artwork => artwork.artist.toLowerCase().includes(artist));
        displayArtworks(filteredArtworks);
    });

    // Toggle View
    toggleViewButton.addEventListener('click', () => {
        artContainer.classList.toggle('list-view');
    });

    // Go Home
    goHome.addEventListener('click', (event) => {
        event.preventDefault();
        galleryPage.style.display = 'none';
    });

    // View Gallery click event
    navViewGallery.addEventListener('click', (event) => { 
        event.preventDefault();
        galleryPage.style.display = 'block';
        fetchArtworks();
    });

    // Mouseover Artwork
    artContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('artwork')) {
            event.target.style.backgroundColor = 'white';
        }
    });

    artContainer.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('artwork')) {
            event.target.style.backgroundColor = 'pink';
        }
    });
});
