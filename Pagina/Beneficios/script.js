document.addEventListener('DOMContentLoaded', function() {
    const benefitsData = {
        residencial: [
            { icon: 'sun', title: "Energía Limpia y Renovable", description: "Aprovecha la energía del sol, una fuente inagotable y libre de emisiones para tu hogar." },
            { icon: 'battery', title: "Independencia Energética", description: "Reduce tu dependencia de la red eléctrica y evita cortes de energía en tu casa." },
            { icon: 'dollar-sign', title: "Ahorro Económico", description: "Reduce significativamente tus facturas de electricidad a largo plazo." },
            { icon: 'home', title: "Aumento del Valor de la Propiedad", description: "Las casas con sistemas solares tienen un mayor valor en el mercado inmobiliario." },
        ],
        comercial: [
            { icon: 'zap', title: "Tecnología Avanzada", description: "Accede a las últimas innovaciones en energía solar y almacenamiento para tu negocio." },
            { icon: 'leaf', title: "Impacto Ambiental Positivo", description: "Contribuye a la reducción de emisiones de CO2 y mejora la imagen de tu empresa." },
            { icon: 'bar-chart', title: "Estabilidad de Costos", description: "Protege tu negocio contra el aumento de los precios de la electricidad." },
            { icon: 'thermometer-sun', title: "Adaptado al Clima de Santa Marta", description: "Sistemas diseñados para aprovechar al máximo el sol caribeño en tu empresa." },
        ]
    };

    const benefitsSection = document.getElementById('benefits-section');
    const residencialTab = document.getElementById('residencial-tab');
    const comercialTab = document.getElementById('comercial-tab');
    const ctaText = document.getElementById('cta-text');

    function renderBenefits(type) {
        benefitsSection.innerHTML = '';
        benefitsData[type].forEach(benefit => {
            const card = document.createElement('div');
            card.className = 'benefit-card bg-gradient-to-br from-orange-50 to-yellow-100 rounded-lg shadow-lg p-6 flex flex-col items-center text-center';
            card.innerHTML = `
                <svg class="w-12 h-12 text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <use href="/icons.svg#${benefit.icon}"></use>
                </svg>
                <h3 class="text-lg font-semibold mb-2 text-orange-800">${benefit.title}</h3>
                <p class="text-gray-700">${benefit.description}</p>
            `;
            benefitsSection.appendChild(card);
        });
    }

    function setActiveTab(tab) {
        residencialTab.classList.toggle('active', tab === 'residencial');
        comercialTab.classList.toggle('active', tab === 'comercial');
        ctaText.textContent = `Contáctanos hoy para una consulta gratuita y descubre cómo la energía solar puede transformar tu ${tab === 'residencial' ? 'hogar' : 'negocio'} en Santa Marta`;
    }

    residencialTab.addEventListener('click', () => {
        renderBenefits('residencial');
        setActiveTab('residencial');
    });

    comercialTab.addEventListener('click', () => {
        renderBenefits('comercial');
        setActiveTab('comercial');
    });

    // Inicializar con beneficios residenciales
    renderBenefits('residencial');
    setActiveTab('residencial');

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