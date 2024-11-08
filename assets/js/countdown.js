function updateCountdown() {
	const countdownElement = document.getElementById('countdown');
	const targetDate = new Date('October 5, 2024 15:00:00').getTime();
	const now = new Date().getTime();
	const difference = now - targetDate;

	// Calculate time components
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	// Display the countdown
	countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);