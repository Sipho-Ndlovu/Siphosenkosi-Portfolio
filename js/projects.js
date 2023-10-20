fetch("/js/projects.json")
  .then(response => response.json())
  .then(data => {
    // Use .map() on the parsed JSON data
    const mappedData = data.projects.map(item => {
      return {
        id: item.id,
        title: item.title,
        shortDescription: item.shortDescription,
        description: item.description,
        image: item.image,
        tags: item.tags
      };
    });

    // Do something with the mapped data
    const proMethods = () => {
        for (const project of mappedData) {
            const card = document.createElement('div');
            card.classList.add("projectCard");
            card.innerHTML = `
            <div class="projectImage">
                <img src="${project.image}" 
                    class="projectThumb">
                <button class="card-btn">View More</button>
            </div>
            <div class="projectInfo">
                <h2 class="projectTitle">${project.title}</h2>
                <p class="projectDescriptionShort">${project.shortDescription}</p>
                <div class="projectTagContainer">
                    <span class="tag">${project.tags}</span>
                </div>
            </div>
            `;
            
            // Append the card to some container element
            const container = document.querySelector(".projectContainer");
            container.appendChild(card);

            const viewMoreButton = card.querySelector('.card-btn');
            viewMoreButton.addEventListener('click', () => {
                console.log(`View More clicked for project with id: ${project.id}`);
            });

        }
    }
    proMethods();
  })
  .catch(error => {
    console.log('Error fetching JSON:', error);
  });