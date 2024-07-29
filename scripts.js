// scripts.js

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
	let result = (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || element.clientHeight) && rect.right <= (window.innerWidth || element.clientWidth));
    return result;
}

// Placeholder functions for buttons
function startForFree() {
    alert("Starting for free!");
    // Implement your logic for starting the free plan
}

function getUnlimited() {
    alert("Getting Unlimited plan!");
    // Implement your logic for getting the unlimited plan
}

function getEnterprise() {
    alert("Getting Enterprise plan!");
    // Implement your logic for getting the enterprise plan
}

window.addEventListener('scroll', () => {
	let cards = document.querySelectorAll('.feature-card');
	cards.forEach(card => {
		if(isInViewport(card))
			card.classList.add('visible');
	});
});

// Navigation link functionality (if needed for dynamic single-page applications)
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.nav-links a').forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			scrollToSection(targetId);
		});
	});
});