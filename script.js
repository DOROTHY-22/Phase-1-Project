document.addEventListener('DOMContentLoaded', () => {
    const homePage =document.getElementById('homePage');
    const galleryPage = document.getElementById('galleryPage');
    const viewGalleryButton = document.getElementById('viewGallery');
    const artContainer = document.getElementById('artContainer');
    const artistFilter = document.getElementById('artistFilter');
    const toggleViewButton = document.getElementById('toggleView');
    const goHome = document.getElementById('goHome')
    let artworks = [];

    // Fetch Artworks from JSON Server
    function fetchArtworks() {
        fetch('http://localhost:3000/artworks')
            .then(response => response.json())
            .then(data => {
                artworks = data;
                displayArtworks(artworks);
            });
    }

    // Display Artworks
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

    // Filter by Artist (Event Listener 1)
    artistFilter.addEventListener('input', () => {
        const artist = artistFilter.value.toLowerCase();
        const filteredArtworks = artworks.filter(artwork => artwork.artist.toLowerCase().includes(artist));
        displayArtworks(filteredArtworks);
    });

    // Toggle View (Event Listener 2)
    toggleViewButton.addEventListener('click', () => {
        artContainer.classList.toggle('list-view');
    });
    
    goHome.addEventListener('click',(event) =>{
    event.preventDefault();
    galleryPage.style.display = 'none';
    homePage.style.display = 'block';
});
        // View Gallery Button (Event Listener 4)
    viewGalleryButton.addEventListener('click', () => {
        homePage.style.display = 'none';
        galleryPage.style.display = 'block';
        fetchArtworks();
    });

    // Mouseover Artwork (Event Listener 4)
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

    fetchArtworks();
});