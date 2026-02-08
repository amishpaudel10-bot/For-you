const plans = [
    { name: "Starter", price: 500, roi: "2%" },
    { name: "Basic", price: 1000, roi: "2.5%" },
    { name: "Silver", price: 5000, roi: "3%" },
    { name: "Gold", price: 10000, roi: "4%" }
];

let userBalance = 0;
let totalInvested = 0;

// Render Plans
function loadPlans() {
    const container = document.getElementById('plans-container');
    plans.forEach(plan => {
        container.innerHTML += `
            <div class="plan-card">
                <h3>${plan.name} Plan</h3>
                <p>Price: Rs. ${plan.price}</p>
                <p>Daily ROI: ${plan.roi}</p>
                <button class="buy-btn" onclick="invest(${plan.price})">Invest Now</button>
            </div>
        `;
    });
}

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function invest(amount) {
    alert(`Initiating investment of Rs. ${amount}. In a real app, this would redirect to eSewa/Khalti.`);
    // Logic for updating UI after successful payment simulation
    totalInvested += amount;
    document.getElementById('total-invested').innerText = `Rs. ${totalInvested}`;
}

window.onload = loadPlans;
