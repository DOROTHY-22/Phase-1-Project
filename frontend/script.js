document.addEventListener('DOMContentLoaded', () => {
    const artSlider = document.getElementById('artSlider');
    const homePage =document.getElementById('homePage');
    const galleryPage = document.getElementById('galleryPage');
    const viewGalleryButton = document.getElementById('viewGallery');
    const artContainer = document.getElementById('artContainer');
    const artistFilter = document.getElementById('artistFilter');
    const toggleViewButton = document.getElementById('toggleView');
    const goHome = document.getElementById('goHome')
    let artworks = [];
    fetch('https://phase-1-project-backend.onrender.com/artworks')
        .then(response => response.json())
        .then(data => {
            sliderArtworks = data;
            displaySliderArt(0); // Initial display
            setInterval(changeSliderArt, 3000); // Change image every 3 seconds
        });

    // Function to display a single image in the slider
    function displaySliderArt(index) {
        artSlider.innerHTML = ''; // Clear previous image
        if (sliderArtworks.length > 0) {
            const img = document.createElement('img');
            img.src = sliderArtworks[index].image;
            img.alt = sliderArtworks[index].title;
            artSlider.appendChild(img);
        }
    }

    // Function to change the slider image
    let currentSliderIndex = 0;
    function changeSliderArt() {
        currentSliderIndex = (currentSliderIndex + 1) % sliderArtworks.length;
        displaySliderArt(currentSliderIndex);
    }

    // Fetch Artworks from JSON Server
    function fetchArtworks() {
        fetch('https://phase-1-project-backend.onrender.com/artworks')
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
    artContainer.addEventListener('mouseover',(event)=> {
        if(event.target.classList.contains('artwork')){
            
        }
    })
    
    fetchArtworks();
        });