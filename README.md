# My Art Gallery

**Author:** [Your Name]

**Description:**

My Art Gallery is a single-page web application that allows users to explore a collection of artworks. The application fetches data from a `db.json` file (served using `json-server`) and displays it in an interactive gallery. Users can switch between grid and list views, and filter artworks by artist.

**Project Features:**

* Displays artwork title, artist, location, and image.
* Allows users to toggle between grid and list views.
* Provides a filter to search artworks by artist.
* Uses `json-server` to serve data.
* Single-page application with no redirects.
* Clean and user-friendly interface.

**Project Setup Instructions:**

1.  **Clone the Repository:**
    ```bash
    git clone [repository URL]
    cd [project directory]
    ```

2.  **Install `json-server` (if you don't have it):**
    ```bash
    npm install -g json-server
    ```

3.  **Run `json-server`:**
    ```bash
    json-server --watch db.json
    ```

4.  **Open `index.html`:**
    Open `index.html` in your web browser.

5.  **Image Files:**
    Place the image files referenced in the `db.json` file in the same directory as your `index.html` file, or in the subdirectories specified in the image paths.

6.  **Optional: Serve Images Statically**
    * If the images fail to load. Start a simple http server from the project's root directory.
        * python: `python -m http.server`
        * node: `npx serve`

**Link to Live Site (GitHub Pages):**

[Your GitHub Pages Link Here] (If you have deployed it to GitHub Pages)

**Copyright and License Information:**

Copyright (c) [Year] [Your Name]

This project is licensed under the [License Name] License. (e.g., MIT License, Apache License 2.0). If you want to use the MIT license, you can add the following to your Readme:# Phase-1-Project