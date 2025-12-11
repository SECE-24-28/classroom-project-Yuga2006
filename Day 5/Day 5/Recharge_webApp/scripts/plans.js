// Demo API Data - Sample recharge plans for all operators

// Sample recharge plans data structure
const rechargePlans = {
    jio: {
        popular: [
            { id: 'jio_p1', price: 149, validity: '24 days', benefits: 'Unlimited calls, 100 SMS/day, 1GB/day data', category: 'popular' },
            { id: 'jio_p2', price: 239, validity: '28 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' },
            { id: 'jio_p3', price: 299, validity: '28 days', benefits: 'Unlimited calls, 100 SMS/day, 2GB/day data', category: 'popular' },
            { id: 'jio_p4', price: 399, validity: '56 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' },
            { id: 'jio_p5', price: 666, validity: '84 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' }
        ],
        data: [
            { id: 'jio_d1', price: 19, validity: '1 day', benefits: '1GB data only', category: 'data' },
            { id: 'jio_d2', price: 29, validity: '2 days', benefits: '2GB data only', category: 'data' },
            { id: 'jio_d3', price: 69, validity: '7 days', benefits: '6GB data only', category: 'data' },
            { id: 'jio_d4', price: 155, validity: '24 days', benefits: '15GB data only', category: 'data' },
            { id: 'jio_d5', price: 251, validity: '30 days', benefits: '50GB data only', category: 'data' }
        ],
        talktime: [
            { id: 'jio_t1', price: 10, validity: '7 days', benefits: '₹7.47 talktime', category: 'talktime' },
            { id: 'jio_t2', price: 20, validity: '14 days', benefits: '₹14.95 talktime', category: 'talktime' },
            { id: 'jio_t3', price: 50, validity: '28 days', benefits: '₹39.37 talktime', category: 'talktime' },
            { id: 'jio_t4', price: 100, validity: '28 days', benefits: '₹81.75 talktime', category: 'talktime' }
        ],
        roaming: [
            { id: 'jio_r1', price: 39, validity: '2 days', benefits: 'Roaming: 1GB/day data, unlimited calls', category: 'roaming' },
            { id: 'jio_r2', price: 69, validity: '7 days', benefits: 'Roaming: 1GB/day data, unlimited calls', category: 'roaming' },
            { id: 'jio_r3', price: 199, validity: '23 days', benefits: 'Roaming: 2GB/day data, unlimited calls', category: 'roaming' }
        ]
    },
    airtel: {
        popular: [
            { id: 'airtel_p1', price: 155, validity: '24 days', benefits: 'Unlimited calls, 100 SMS/day, 1GB/day data', category: 'popular' },
            { id: 'airtel_p2', price: 265, validity: '28 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' },
            { id: 'airtel_p3', price: 319, validity: '28 days', benefits: 'Unlimited calls, 100 SMS/day, 2GB/day data', category: 'popular' },
            { id: 'airtel_p4', price: 479, validity: '56 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' },
            { id: 'airtel_p5', price: 719, validity: '84 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' }
        ],
        data: [
            { id: 'airtel_d1', price: 25, validity: '1 day', benefits: '1GB data only', category: 'data' },
            { id: 'airtel_d2', price: 48, validity: '3 days', benefits: '3GB data only', category: 'data' },
            { id: 'airtel_d3', price: 98, validity: '7 days', benefits: '12GB data only', category: 'data' },
            { id: 'airtel_d4', price: 181, validity: '30 days', benefits: '20GB data only', category: 'data' },
            { id: 'airtel_d5', price: 301, validity: '30 days', benefits: '50GB data only', category: 'data' }
        ],
        talktime: [
            { id: 'airtel_t1', price: 10, validity: '7 days', benefits: '₹7.39 talktime', category: 'talktime' },
            { id: 'airtel_t2', price: 23, validity: '18 days', benefits: '₹17.04 talktime', category: 'talktime' },
            { id: 'airtel_t3', price: 49, validity: '28 days', benefits: '₹38.84 talktime', category: 'talktime' },
            { id: 'airtel_t4', price: 95, validity: '28 days', benefits: '₹76.96 talktime', category: 'talktime' }
        ],
        roaming: [
            { id: 'airtel_r1', price: 49, validity: '3 days', benefits: 'Roaming: 1GB/day data, unlimited calls', category: 'roaming' },
            { id: 'airtel_r2', price: 95, validity: '7 days', benefits: 'Roaming: 1GB/day data, unlimited calls', category: 'roaming' },
            { id: 'airtel_r3', price: 295, validity: '30 days', benefits: 'Roaming: 2GB/day data, unlimited calls', category: 'roaming' }
        ]
    },
    vi: {
        popular: [
            { id: 'vi_p1', price: 179, validity: '24 days', benefits: 'Unlimited calls, 100 SMS/day, 1GB/day data', category: 'popular' },
            { id: 'vi_p2', price: 269, validity: '28 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' },
            { id: 'vi_p3', price: 329, validity: '28 days', benefits: 'Unlimited calls, 100 SMS/day, 2GB/day data', category: 'popular' },
            { id: 'vi_p4', price: 509, validity: '56 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' },
            { id: 'vi_p5', price: 799, validity: '84 days', benefits: 'Unlimited calls, 100 SMS/day, 1.5GB/day data', category: 'popular' }
        ],
        data: [
            { id: 'vi_d1', price: 22, validity: '1 day', benefits: '1GB data only', category: 'data' },
            { id: 'vi_d2', price: 58, validity: '3 days', benefits: '4GB data only', category: 'data' },
            { id: 'vi_d3', price: 118, validity: '14 days', benefits: '12GB data only', category: 'data' },
            { id: 'vi_d4', price: 186, validity: '30 days', benefits: '25GB data only', category: 'data' },
            { id: 'vi_d5', price: 351, validity: '30 days', benefits: '50GB data only', category: 'data' }
        ],
        talktime: [
            { id: 'vi_t1', price: 10, validity: '7 days', benefits: '₹7.50 talktime', category: 'talktime' },
            { id: 'vi_t2', price: 20, validity: '18 days', benefits: '₹14.75 talktime', category: 'talktime' },
            { id: 'vi_t3', price: 50, validity: '28 days', benefits: '₹37.50 talktime', category: 'talktime' },
            { id: 'vi_t4', price: 100, validity: '28 days', benefits: '₹75.00 talktime', category: 'talktime' }
        ],
        roaming: [
            { id: 'vi_r1', price: 51, validity: '2 days', benefits: 'Roaming: 1GB/day data, unlimited calls', category: 'roaming' },
            { id: 'vi_r2', price: 101, validity: '7 days', benefits: 'Roaming: 1GB/day data, unlimited calls', category: 'roaming' },
            { id: 'vi_r3', price: 351, validity: '28 days', benefits: 'Roaming: 2GB/day data, unlimited calls', category: 'roaming' }
        ]
    },
    bsnl: {
        popular: [
            { id: 'bsnl_p1', price: 108, validity: '25 days', benefits: 'Unlimited calls, 100 SMS/day, 1GB/day data', category: 'popular' },
            { id: 'bsnl_p2', price: 187, validity: '28 days', benefits: 'Unlimited calls, 100 SMS/day, 2GB/day data', category: 'popular' },
            { id: 'bsnl_p3', price: 247, validity: '45 days', benefits: 'Unlimited calls, 100 SMS/day, 1GB/day data', category: 'popular' },
            { id: 'bsnl_p4', price: 397, validity: '80 days', benefits: 'Unlimited calls, 100 SMS/day, 1GB/day data', category: 'popular' },
            { id: 'bsnl_p5', price: 797, validity: '160 days', benefits: 'Unlimited calls, 100 SMS/day, 1GB/day data', category: 'popular' }
        ],
        data: [
            { id: 'bsnl_d1', price: 17, validity: '1 day', benefits: '1GB data only', category: 'data' },
            { id: 'bsnl_d2', price: 47, validity: '5 days', benefits: '3GB data only', category: 'data' },
            { id: 'bsnl_d3', price: 78, validity: '10 days', benefits: '8GB data only', category: 'data' },
            { id: 'bsnl_d4', price: 142, validity: '30 days', benefits: '20GB data only', category: 'data' },
            { id: 'bsnl_d5', price: 267, validity: '30 days', benefits: '50GB data only', category: 'data' }
        ],
        talktime: [
            { id: 'bsnl_t1', price: 10, validity: '5 days', benefits: '₹8.00 talktime', category: 'talktime' },
            { id: 'bsnl_t2', price: 20, validity: '15 days', benefits: '₹16.00 talktime', category: 'talktime' },
            { id: 'bsnl_t3', price: 50, validity: '30 days', benefits: '₹40.00 talktime', category: 'talktime' },
            { id: 'bsnl_t4', price: 100, validity: '30 days', benefits: '₹80.00 talktime', category: 'talktime' }
        ],
        roaming: [
            { id: 'bsnl_r1', price: 56, validity: '5 days', benefits: 'Roaming: 1GB/day data, unlimited calls', category: 'roaming' },
            { id: 'bsnl_r2', price: 96, validity: '10 days', benefits: 'Roaming: 1GB/day data, unlimited calls', category: 'roaming' },
            { id: 'bsnl_r3', price: 186, validity: '30 days', benefits: 'Roaming: 1.5GB/day data, unlimited calls', category: 'roaming' }
        ]
    }
};

// Function to get plans by operator and category
function getPlans(operator, category = 'popular') {
    if (!rechargePlans[operator]) {
        return [];
    }
    return rechargePlans[operator][category] || [];
}

// Function to get all categories for an operator
function getCategories(operator) {
    if (!rechargePlans[operator]) {
        return [];
    }
    return Object.keys(rechargePlans[operator]);
}

// Function to search plans by price range
function searchPlansByPrice(operator, minPrice, maxPrice) {
    if (!rechargePlans[operator]) {
        return [];
    }
    
    const allPlans = [];
    Object.values(rechargePlans[operator]).forEach(categoryPlans => {
        allPlans.push(...categoryPlans);
    });
    
    return allPlans.filter(plan => plan.price >= minPrice && plan.price <= maxPrice);
}

// Function to get plan by ID
function getPlanById(planId) {
    for (const operator in rechargePlans) {
        for (const category in rechargePlans[operator]) {
            const plan = rechargePlans[operator][category].find(p => p.id === planId);
            if (plan) {
                return { ...plan, operator };
            }
        }
    }
    return null;
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        rechargePlans,
        getPlans,
        getCategories,
        searchPlansByPrice,
        getPlanById
    };
}