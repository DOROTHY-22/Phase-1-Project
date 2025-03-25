document.addEventListener('DOMContentLoaded', () => {
    const artContainer = document.getElementById('artContainer');
    const artistFilter = document.getElementById('artistFilter');
    const toggleViewButton = document.getElementById('toggleView');
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

    // Mouseover Artwork (Event Listener 3)
    artContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('artwork')) {
            event.target.style.backgroundColor = 'red';
        }
    });

    artContainer.addEventListener('mouseout', (event) => {
      if (event.target.classList.contains('artwork')) {
        event.target.style.backgroundColor = 'navyblue';
      }
    });

    fetchArtworks();
});