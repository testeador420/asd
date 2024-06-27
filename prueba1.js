let currentPage = 1;
const id = 55;  // ID del famoso, puedes cambiarlo según sea necesario
const profilesContainer = document.getElementById('profiles');
const loadMoreButton = document.getElementById('load-more');

async function loadProfiles(page) {
    try {
        const response = await fetch(`https://fapello.is/api/media/${id}/${page}/1`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        data.forEach(profile => {
            const profileElement = document.createElement('div');
            profileElement.classList.add('profile');
            
            profileElement.innerHTML = `
                <h2>${profile.name}</h2>
                <img src="${profile.thumbNew}" alt="${profile.name}" class="profile-img">
                <div class="profile-images">
                    <img src="${profile.newUrlThumb}" alt="Small Image" class="profile-thumb">
                    <a href="${profile.newUrl}" target="_blank" class="profile-link">View Large Image</a>
                </div>
            `;
            
            profilesContainer.appendChild(profileElement);
        });
    } catch (error) {
        console.error('Error fetching profiles:', error);
    }
}

loadMoreButton.addEventListener('click', () => {
    currentPage++;
    loadProfiles(currentPage);
});

// Cargar la primera página al inicio
loadProfiles(currentPage);
