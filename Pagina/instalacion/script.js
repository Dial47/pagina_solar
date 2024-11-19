const steps = [
    { 
        title: "Evaluación Inicial", 
        description: "Analizamos tu consumo energético y el espacio disponible",
        image: "/placeholder.svg?height=400&width=600"
    },
    { 
        title: "Diseño Personalizado", 
        description: "Creamos un sistema solar adaptado a tus necesidades",
        image: "/placeholder.svg?height=400&width=600"
    },
    { 
        title: "Instalación", 
        description: "Nuestro equipo experto realiza el montaje de tu sistema solar",
        image: "/placeholder.svg?height=400&width=600"
    },
];

let currentStep = 0;

const stepTitle = document.getElementById('stepTitle');
const stepDescription = document.getElementById('stepDescription');
const stepIndicator = document.getElementById('stepIndicator');
const stepImage = document.getElementById('stepImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateStep() {
    const step = steps[currentStep];
    stepTitle.textContent = step.title;
    stepDescription.textContent = step.description;
    stepIndicator.textContent = `Paso ${currentStep + 1} de ${steps.length}`;
    stepImage.src = step.image;
    stepImage.alt = step.title;

    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === steps.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    }
});

// Initialize
updateStep();