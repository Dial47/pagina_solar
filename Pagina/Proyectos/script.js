document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            id: 1,
            title: "Residencia Familiar Torres",
            description: "Instalación de 10 paneles solares para una casa de 150m², reduciendo la factura energética en un 80%",
            image: "/placeholder.svg?height=200&width=300",
            category: "residencial",
            completion: "2023",
            power: "5kW",
            savings: "80%",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'
        },
        {
            id: 2,
            title: "Hotel Costero Caribe",
            description: "Sistema solar de 50kW para un hotel de 100 habitaciones, incluyendo sistema de respaldo con baterías",
            image: "/placeholder.svg?height=200&width=300",
            category: "comercial",
            completion: "2023",
            power: "50kW",
            savings: "65%",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M3 21h18"></path><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4"></path><line x1="5" y1="21" x2="5" y2="10.85"></line><line x1="19" y1="21" x2="19" y2="10.85"></line><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"></path></svg>'
        },
        {
            id: 3,
            title: "Centro Comercial Oceánico",
            description: "Proyecto de 200kW para cubrir el 70% del consumo energético, con sistema de monitoreo en tiempo real",
            image: "/placeholder.svg?height=200&width=300",
            category: "comercial",
            completion: "2022",
            power: "200kW",
            savings: "70%",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>'
        },
        {
            id: 4,
            title: "Escuela Rural Nueva Esperanza",
            description: "Donación de sistema solar de 15kW para una escuela rural, beneficiando a más de 200 estudiantes",
            image: "/placeholder.svg?height=200&width=300",
            category: "social",
            completion: "2023",
            power: "15kW",
            savings: "100%",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m4 6 8-4 8 4"></path><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path><path d="M18 5v17"></path><path d="M6 5v17"></path><circle cx="12" cy="9" r="2"></circle></svg>'
        },
        {
            id: 5,
            title: "Finca Agrícola El Paraíso",
            description: "Instalación de bombeo solar para irrigación de 50 hectáreas, con sistema de control automatizado",
            image: "/placeholder.svg?height=200&width=300",
            category: "agricola",
            completion: "2022",
            power: "25kW",
            savings: "75%",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path><path d="M15 7h6v6"></path></svg>'
        },
        {
            id: 6,
            title: "Edificio Corporativo Marina",
            description: "Sistema de 75kW con almacenamiento en baterías y gestión inteligente de consumo",
            image: "/placeholder.svg?height=200&width=300",
            category: "comercial",
            completion: "2023",
            power: "75kW",
            savings: "60%",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-5-7 5v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></path><path d="M13 13h4"></path><path d="M13 17h4"></path></svg>'
        },
    ];

    const projectsGrid = document.getElementById('projects-grid');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-tabs button');

    function renderProjects(projectsToRender) {
        projectsGrid.innerHTML = '';
        projectsToRender.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card bg-white rounded-lg shadow-lg overflow-hidden';
            projectCard.innerHTML = `
                <div class="relative h-48">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        ${project.icon}
                        <span class="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">${project.category}</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="grid grid-cols-3 gap-2 text-sm">
                        <div class="text-center p-2 bg-orange-100 rounded">
                            <div class="font-semibold">${project.power}</div>
                            <div class="text-gray-600">Potencia</div>
                        </div>
                        <div class="text-center p-2 bg-orange-100 rounded">
                            <div class="font-semibold">${project.savings}</div>
                            <div class="text-gray-600">Ahorro</div>
                        </div>
                        <div class="text-center p-2 bg-orange-100 rounded">
                            <div class="font-semibold">${project.completion}</div>
                            <div class="text-gray-600">Año</div>
                        </div>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.category-tabs button.active').dataset.category;

        const filteredProjects = projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm) ||
                                  project.description.toLowerCase().includes(searchTerm);
            const matchesCategory = activeCategory === 'todos' || project.category === activeCategory;
            return matchesSearch && matchesCategory;
        });

        renderProjects(filteredProjects);
    }

    searchInput.addEventListener('input', filterProjects);

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects();
        });
    });

    // Inicializar con todos los proyectos
    renderProjects(projects);

    // Menú móvil
    const menuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.hidden.md\\:flex');

    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('mobile-menu');
        mobileMenu.classList.toggle('active');
    });

    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});