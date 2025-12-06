const petsData = [
    {
        id: 1,
        name: "Luna",
        type: "Perro",
        breed: "Labrador Mix",
        age: "2 años",
        size: "Mediano",
        gender: "Hembra",
        description: "Luna es una perra muy cariñosa y juguetona. Fue rescatada de la calle y está buscando un hogar donde pueda recibir todo el amor que merece.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=662&q=80",
        features: ["Amigable con niños", "Sociable con otros perros", "Energética"],
        health: "Vacunada, desparasitada y esterilizada",
        category: "perro"
    },
    {
        id: 2,
        name: "Simba",
        type: "Gato",
        breed: "Atigrado",
        age: "1 año",
        size: "Pequeño",
        gender: "Macho",
        description: "Simba es un gato tranquilo y curioso. Le encanta descansar en lugares altos y observar todo a su alrededor. Ideal para un hogar tranquilo.",
        image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: ["Tranquilo", "Curioso", "Independiente"],
        health: "Vacunado, desparasitado y esterilizado",
        category: "gato"
    },
    {
        id: 3,
        name: "Rocky",
        type: "Perro",
        breed: "Bulldog Francés",
        age: "4 meses",
        size: "Pequeño",
        gender: "Macho",
        description: "Rocky es un cachorro lleno de energía y alegría. Le encanta jugar y recibir atención. Será un compañero perfecto para una familia activa.",
        image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        features: ["Juguetón", "Energético", "Amigable"],
        health: "Vacunado y desparasitado",
        category: "cachorro"
    },
    {
        id: 4,
        name: "Molly",
        type: "Perro",
        breed: "Golden Retriever",
        age: "5 años",
        size: "Grande",
        gender: "Hembra",
        description: "Molly es una perra adulta muy tranquila y obediente. Fue entrenada básicamente y responde bien a comandos. Ideal para dueños primerizos.",
        image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80",
        features: ["Tranquila", "Obediente", "Buena con niños"],
        health: "Vacunada, desparasitada y esterilizada",
        category: "adulto"
    },
    {
        id: 5,
        name: "Nala",
        type: "Gato",
        breed: "Siamés",
        age: "3 años",
        size: "Mediano",
        gender: "Hembra",
        description: "Nala es una gata vocal y afectuosa. Le encanta la compañía humana y seguirá a su dueño por toda la casa. Perfecta para alguien que busca un compañero cercano.",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
        features: ["Afectuosa", "Vocal", "Sociable"],
        health: "Vacunada, desparasitada y esterilizada",
        category: "gato"
    },
    {
        id: 6,
        name: "Toby",
        type: "Perro",
        breed: "Beagle",
        age: "8 meses",
        size: "Mediano",
        gender: "Macho",
        description: "Toby es un perro joven con un gran sentido del olfato. Le encanta explorar y necesita una familia que pueda proporcionarle suficiente ejercicio y estimulación mental.",
        image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        features: ["Curioso", "Energético", "Inteligente"],
        health: "Vacunado, desparasitado y esterilizado",
        category: "perro"
    },
    {
        id: 7,
        name: "Bella",
        type: "Gato",
        breed: "Persa",
        age: "6 meses",
        size: "Pequeño",
        gender: "Hembra",
        description: "Bella es una gatita dulce y tranquila. Tiene un pelaje hermoso que requiere cepillado regular. Le encanta acurrucarse en el regazo de su dueño.",
        image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: ["Tranquila", "Cariñosa", "Pelaje largo"],
        health: "Vacunada, desparasitada y esterilizada",
        category: "cachorro"
    },
    {
        id: 8,
        name: "Max",
        type: "Perro",
        breed: "Pastor Alemán",
        age: "7 años",
        size: "Grande",
        gender: "Macho",
        description: "Max es un perro adulto leal y protector. Fue entrenado y responde bien a comandos. Necesita una familia con experiencia en razas grandes.",
        image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80",
        features: ["Leal", "Protector", "Inteligente"],
        health: "Vacunado, desparasitado y esterilizado",
        category: "adulto"
    }
];

let currentFilter = 'all';
let displayedPets = 4;
const petsPerLoad = 4;

document.addEventListener('DOMContentLoaded', function() {
    renderPets();
    
    setupFilterButtons();
    
    document.getElementById('load-more-btn').addEventListener('click', loadMorePets);
    
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
    
    document.getElementById('subscribe-btn').addEventListener('click', handleNewsletterSubscription);
    
    document.getElementById('adopt-pet-btn').addEventListener('click', handleAdoptionRequest);
    
    setupSmoothScrolling();
    
    setupLogoutEvent();
    
    showWelcomeMessage();
});

function renderPets() {
    const container = document.getElementById('pets-container');
    container.innerHTML = '';
    
    let filteredPets = petsData;
    if (currentFilter !== 'all') {
        filteredPets = petsData.filter(pet => {
            if (currentFilter === 'perro' || currentFilter === 'gato') {
                return pet.type.toLowerCase() === currentFilter;
            } else if (currentFilter === 'cachorro') {
                return pet.age.includes('meses') || parseInt(pet.age) < 2;
            } else if (currentFilter === 'adulto') {
                return !pet.age.includes('meses') && parseInt(pet.age) >= 2;
            }
            return true;
        });
    }
    
    const petsToShow = filteredPets.slice(0, displayedPets);
    
    petsToShow.forEach(pet => {
        const petCard = createPetCard(pet);
        container.appendChild(petCard);
    });
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (displayedPets >= filteredPets.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

function createPetCard(pet) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 mb-4';
    
    let categoryBadge = '';
    if (pet.age.includes('meses') || parseInt(pet.age) < 2) {
        categoryBadge = '<span class="badge bg-success">Cachorro</span>';
    } else {
        categoryBadge = '<span class="badge bg-warning">Adulto</span>';
    }
    
    col.innerHTML = `
        <div class="card pet-card shadow-sm">
            <img src="${pet.image}" class="card-img-top pet-card-img" alt="${pet.name}">
            <div class="card-body pet-card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title fw-bold">${pet.name}</h5>
                    <span class="badge ${pet.type === 'Perro' ? 'bg-primary' : 'bg-info'}">${pet.type}</span>
                </div>
                <p class="card-text text-muted">${pet.breed} • ${pet.age} • ${pet.size}</p>
                <p class="card-text">${pet.description.substring(0, 100)}...</p>
                <div class="pet-features mb-3">
                    ${pet.features.map(feature => `<span class="badge bg-light text-dark me-1 mb-1">${feature}</span>`).join('')}
                    ${categoryBadge}
                </div>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-primary btn-sm view-pet-btn" data-pet-id="${pet.id}">
                        <i class="fas fa-eye me-1"></i>Ver Detalles
                    </button>
                    <button class="btn btn-primary btn-sm adopt-pet-btn" data-pet-id="${pet.id}">
                        <i class="fas fa-heart me-1"></i>Adoptar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    col.querySelector('.view-pet-btn').addEventListener('click', function() {
        showPetDetails(parseInt(this.getAttribute('data-pet-id')));
    });
    
    col.querySelector('.adopt-pet-btn').addEventListener('click', function() {
        initiateAdoption(parseInt(this.getAttribute('data-pet-id')));
    });
    
    return col;
}

function showPetDetails(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;
    
    document.getElementById('modal-pet-name').textContent = pet.name;
    document.getElementById('modal-pet-image').src = pet.image;
    document.getElementById('modal-pet-image').alt = pet.name;
    document.getElementById('modal-pet-type').textContent = pet.type;
    document.getElementById('modal-pet-age').textContent = pet.age;
    document.getElementById('modal-pet-size').textContent = pet.size;
    document.getElementById('modal-pet-description').textContent = pet.description;
    document.getElementById('modal-pet-health').textContent = pet.health;
    
    const featuresList = document.getElementById('modal-pet-features');
    featuresList.innerHTML = '';
    pet.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check text-success me-2"></i>${feature}`;
        featuresList.appendChild(li);
    });
    
    document.getElementById('adopt-pet-btn').setAttribute('data-pet-id', pet.id);
    
    const petModal = new bootstrap.Modal(document.getElementById('petModal'));
    petModal.show();
}

function initiateAdoption(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;
    
    const confirmAdoption = confirm(`¿Estás interesado en adoptar a ${pet.name}? Serás redirigido al formulario de adopción.`);
    
    if (confirmAdoption) {
        alert(`¡Excelente decisión! Para adoptar a ${pet.name}, por favor completa el formulario de contacto indicando tu interés en esta mascota. Nuestro equipo se pondrá en contacto contigo pronto.`);
        
        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
        
        const messageField = document.getElementById('message');
        messageField.value = `Estoy interesado en adoptar a ${pet.name} (${pet.type}, ${pet.age}). Por favor, contáctenme para más información.`;
    }
}
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            
            displayedPets = petsPerLoad;
            
            renderPets();
        });
    });
}

function loadMorePets() {
    displayedPets += petsPerLoad;
    renderPets();
    
    const petsContainer = document.getElementById('pets-container');
    const lastPetCard = petsContainer.lastElementChild;
    if (lastPetCard) {
        lastPetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const newsletter = document.getElementById('newsletter').checked;
    
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto en ${email}.`);
    
    event.target.reset();
    
    showNotification('Mensaje enviado con éxito', 'success');
}

function handleNewsletterSubscription() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value;
    
    if (!email || !isValidEmail(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        emailInput.focus();
        return;
    }
    
    alert(`¡Gracias por suscribirte! Recibirás actualizaciones sobre nuevas mascotas en ${email}.`);
    emailInput.value = '';
    
    showNotification('Suscripción exitosa', 'success');
}

function handleAdoptionRequest() {
    const petId = parseInt(this.getAttribute('data-pet-id'));
    const pet = petsData.find(p => p.id === petId);
    
    if (!pet) return;
    
    const petModal = bootstrap.Modal.getInstance(document.getElementById('petModal'));
    petModal.hide();
    
    alert(`Has solicitado adoptar a ${pet.name}. Te contactaremos pronto para continuar con el proceso.`);
    
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    
    const messageField = document.getElementById('message');
    messageField.value = `Quiero adoptar a ${pet.name}. Por favor, contáctenme para continuar con el proceso de adopción.`;
    
    showNotification(`Solicitud de adopción para ${pet.name} enviada`, 'success');
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                if (targetId !== '#inicio') {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === targetId) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    });
}

function setupLogoutEvent() {
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'btn btn-outline-danger btn-sm d-none';
    logoutBtn.id = 'logout-btn';
    logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt me-1"></i>Cerrar Sesión';
    logoutBtn.style.position = 'fixed';
    logoutBtn.style.bottom = '20px';
    logoutBtn.style.right = '20px';
    logoutBtn.style.zIndex = '1000';
    
    document.body.appendChild(logoutBtn);
    
    logoutBtn.addEventListener('click', function() {
        alert('Sesión cerrada (simulación). En una aplicación real, esto cerraría la sesión del usuario.');
        this.classList.add('d-none');
    });
    
    setTimeout(() => {
        logoutBtn.classList.remove('d-none');
        showNotification('Sesión iniciada (simulación)', 'info');
    }, 5000);
}

function showWelcomeMessage() {
    setTimeout(() => {
        showNotification('¡Bienvenido a nuestra plataforma de adopción de mascotas!', 'info');
    }, 1000);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.maxWidth = '300px';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.style.backgroundColor = '';
        navbar.style.boxShadow = '';
    }
});

