const projects = [
    {
        name: "2DT304-Project-with-Embedded-System",
        description: "Student project about lifebuoy monitoring to ensure that lifebuoys are in the correct positions or discover if they are gone.",
        image: "assets/images/2DT304-Project-with-Embedded-System.jpg", 
        url: "https://github.com/shyye/2DT304-Project-with-Embedded-System",
        languages: [
            { name: "C", class: "c" },
            { name: "HTML/CSS", class: "html-css" },
            { name: "JavaScript", class: "javascript" }
        ]
    },
    
    {
        name: "Migraine Management Platform [Thesis work]",
        description: "Migraine Management Platform: Bridging Mobile, Wearable Tracking, and Treatment Devices. This degree project investigates integrating a mobile application with a prototype treatment device and health data from smartwatches, with smartwatch integration explored only in theory. It focuses on Bluetooth communication, evaluates Flutter development, and delivers two apps: one experimental prototype and one layout concept.",
        image: "assets/images/thesis-work-color.png",
        url: "https://www.diva-portal.org/smash/record.jsf?pid=diva2:1891301",
        languages: [
            { name: "Flutter", class: "flutter" }
        ]
    },

    {
        name: "Migraine Management Platform [Thesis work]",
        description: "Migraine Management Platform: Bridging Mobile, Wearable Tracking, and Treatment Devices. This degree project investigates integrating a mobile application with a prototype treatment device and health data from smartwatches, with smartwatch integration explored only in theory. It focuses on Bluetooth communication, evaluates Flutter development, and delivers two apps: one experimental prototype and one layout concept.",
        image: "assets/images/thesis-work-color.png",
        url: "https://www.diva-portal.org/smash/record.jsf?pid=diva2:1891301",
        languages: [
            { name: "Flutter", class: "flutter" }
        ]
    },
];

function renderProjects() {
    const container = document.getElementById("project-container");
    container.innerHTML = ""; // Clear existing content

    projects.forEach((project) => {
        // Main project-card container
        const card = document.createElement("div");
        card.className = "project-card";

        // Text wrapper
        const textWrapper = document.createElement("div");
        textWrapper.className = "project-card-text-wrapper";

        // Project name and description
        const nameAndDescription = document.createElement("div");
        nameAndDescription.innerHTML = `
            <h3 class="project-name"><a href="${project.url}" target="_blank">${project.name}</a></h3>
            <p class="project-description">${project.description}</p>
        `;

        // Project languages container
        const languageWrapper = document.createElement("div");
        languageWrapper.className = "project-language";

        project.languages.forEach((language) => {
            const languageDiv = document.createElement("div");
            languageDiv.innerHTML = `
                <div class="programming-language-circle ${language.class}"></div> ${language.name}
            `;
            languageWrapper.append(languageDiv); // Append each language
        });

        textWrapper.append(nameAndDescription, languageWrapper);

        // Image wrapper
        const imageWrapper = document.createElement("div");
        imageWrapper.className = "project-card-image-wrapper";
        imageWrapper.innerHTML = `
            <img src="${project.image}" alt="Project Image" class="project-image">
        `;

        card.append(textWrapper, imageWrapper);

        container.append(card);
    });
}

// Call the function on page load
//   document.addEventListener("DOMContentLoaded", renderProjects);
renderProjects();


//TODO: move to seperate js file
// List of Instagram posts with attributes
const instagramPosts = [
    {
        imagePath: "assets/images-instagram/instagramv51_1.jpg",
        url: "https://www.instagram.com/dataitlnu/p/CIxsUJcpps1/?img_index=1"
    },
    {
        imagePath: "assets/images-instagram/instagramv51_2-new.jpg",
        url: "https://www.instagram.com/dataitlnu/p/CI0AZhVJAso/?img_index=1"
    },
    {
        imagePath: "assets/images-instagram/instagramv51_3.jpg",
        url: "https://www.instagram.com/dataitlnu/p/CI2ZbyqJmh_/?img_index=1"
    },
    {
        imagePath: "assets/images-instagram/instagramv51_4.jpg",
        url: "https://www.instagram.com/dataitlnu/p/CI5e2mypAQd/"
    },
    {
        imagePath: "assets/images-instagram/instagramv51_5.jpg",
        url: "https://www.instagram.com/dataitlnu/p/CI7jTjophy7/"
    },
    {
        imagePath: "assets/images-instagram/instagramv51_6.jpg",
        url: "https://www.instagram.com/dataitlnu/p/CI_NuaHpsCM/?img_index=1"
    },
    {
        imagePath: "assets/images-instagram/instagramv51_7-1.jpg",
        url: "https://www.instagram.com/dataitlnu/p/CJBTxTQpBkb/?img_index=1"
    },
    {
        imagePath: "assets/images-instagram/instagramv51_7.jpg",
        url: "https://www.instagram.com/dataitlnu/p/CJBTxTQpBkb/?img_index=1"
    }    
];

// Dynamically render posts
const renderPosts = () => {
    const container = document.querySelector("#instagram-wrapper");
    instagramPosts.forEach(post => {
        // Create a link element that wraps the entire post
        const link = document.createElement("a");
        link.href = post.url;
        link.target = "_blank";
        link.className = "instagram-item-wrapper";

        // Create an image element
        const img = document.createElement("img");
        img.src = post.imagePath;
        img.alt = "Instagram Post";
        img.className = "instagram-image-wrapper";

        // Append image to the link
        link.append(img);

        // Append the link to the container
        container.append(link);
    });
};

// Run the render function after DOM content is loaded
// document.addEventListener("DOMContentLoaded", renderPosts);
renderPosts();


