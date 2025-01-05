// Data configuration for the profile and social links
const profileData = {
    name: "Vynaa Valerie",
    description: "Welcome to my world! 🌟",
    image: "https://itzpire.com/file/38d55b007fe5.jpg"
};

const socialLinks = [
    { name: "Twitter", url: "https://twitter.com", image: "https://itzpire.com/file/38d55b007fe5.jpg" },
    { name: "Instagram", url: "https://instagram.com", image: "https://itzpire.com/file/1324132e6764.jpg" },
    { name: "Facebook", url: "https://facebook.com", image: "https://itzpire.com/file/abd3fe1a08f0.jpg" },
    { name: "LinkedIn", url: "https://linkedin.com", image: "https://itzpire.com/file/c3ce93a7ccee.jpg" },
    { name: "YouTube", url: "https://youtube.com", image: "https://itzpire.com/file/86a4abe18b7f.jpg" }
];

// Set profile data dynamically
document.getElementById('profile-name').textContent = profileData.name;
document.getElementById('profile-description').textContent = profileData.description;
document.getElementById('profile-image').src = profileData.image;

// Inject social link buttons dynamically
const socialLinksContainer = document.getElementById('social-links');
socialLinks.forEach(link => {
    const linkBtn = document.createElement('a');
    linkBtn.href = link.url;
    linkBtn.target = "_blank";
    linkBtn.classList.add('link-btn');

    const img = document.createElement('img');
    img.src = link.image;
    img.alt = link.name;

    const text = document.createTextNode(link.name);

    linkBtn.appendChild(img);
    linkBtn.appendChild(text);
    socialLinksContainer.appendChild(linkBtn);
});
