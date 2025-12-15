const Plan = require('../models/planModel');

// Get all plans
exports.getPlans = async (req, res) => {
    try {
        const { operator, category } = req.query;
        let query = {};

        if (operator && operator !== 'all') {
            query.operator = { $regex: new RegExp(operator, 'i') };
        }

        if (category && category !== 'all') {
            if (category === 'popular') {
                query.popular = true;
            } else if (category === 'data') {
                // This is a bit complex for a simple string match, so we might handle it on frontend or improve schema
                // For now, let's just return all and let frontend filter if needed, or implement basic filtering
            }
        }

        const plans = await Plan.find(query);
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get plan by ID
exports.getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }
        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Seed plans (Initial data population)
exports.seedPlans = async (req, res) => {
    try {
        await Plan.deleteMany({}); // Clear existing plans

        const plans = [
            // Airtel Plans
            {
                price: 299,
                validity: '28 Days',
                data: '1.5 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                popular: true,
                operator: 'Airtel',
                category: 'popular',
                features: ['Free Roaming', 'Disney+ Hotstar Mobile', 'Wynk Music Premium'],
                description: 'Perfect for daily usage with entertainment benefits'
            },
            {
                price: 719,
                validity: '84 Days',
                data: '1.5 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                operator: 'Airtel',
                category: 'validity',
                features: ['Free Roaming', 'Netflix Mobile', 'Amazon Prime Video'],
                description: 'Long validity plan with premium OTT benefits'
            },
            {
                price: 179,
                validity: '28 Days',
                data: '2 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                popular: false,
                operator: 'Airtel',
                category: 'Essential',
                features: ['National Roaming', 'Airtel Thanks Benefits', 'Wynk Music Free']
            },
            {
                price: 549,
                validity: '56 Days',
                data: '2 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                popular: false,
                operator: 'Airtel',
                category: 'Long Term',
                features: ['National Roaming', 'Disney+ Hotstar Mobile', 'Amazon Prime Video Mobile', 'Wynk Music Premium']
            },

            // Jio Plans
            {
                price: 199,
                validity: '18 Days',
                data: '2 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                operator: 'Jio',
                category: 'data',
                features: ['Free Roaming', 'JioTV', 'JioCinema'],
                description: 'High data plan for heavy internet users'
            },
            {
                price: 259,
                validity: '30 Days',
                data: '1.5 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                popular: true,
                operator: 'Jio',
                category: 'popular',
                features: ['Free Roaming', 'JioTV', 'JioCinema', 'JioSaavn'],
                description: 'Most popular monthly plan with Jio apps'
            },
            {
                price: 666,
                validity: '84 Days',
                data: '1.5 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                operator: 'Jio',
                category: 'validity',
                features: ['Free Roaming', 'Netflix Mobile', 'Disney+ Hotstar'],
                description: 'Extended validity with premium entertainment'
            },
            {
                price: 149,
                validity: '20 Days',
                data: '1 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                popular: false,
                operator: 'Jio',
                category: 'Starter',
                features: ['JioTV', 'JioCinema', 'JioSaavn Pro', 'JioCloud 50GB']
            },

            // Vi Plans
            {
                price: 309,
                validity: '28 Days',
                data: '2 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                operator: 'Vi',
                category: 'data',
                features: ['Free Roaming', 'Vi Movies & TV', 'Weekend Data Rollover'],
                description: 'High-speed data with weekend rollover benefits'
            },
            {
                price: 449,
                validity: '56 Days',
                data: '2 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                operator: 'Vi',
                category: 'validity',
                features: ['Free Roaming', 'Netflix Mobile', 'Amazon Prime Video'],
                description: 'Perfect balance of data and validity'
            },
            {
                price: 179,
                validity: '24 Days',
                data: '1 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                popular: false,
                operator: 'Vi',
                category: 'Basic',
                features: ['Vi Movies & TV', 'Weekend Data Rollover', 'Vi App Benefits']
            },

            // BSNL Plans
            {
                price: 197,
                validity: '18 Days',
                data: '2 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                popular: true,
                operator: 'BSNL',
                category: 'popular',
                features: ['Free Roaming', 'BSNL Tunes', 'Location Based Services'],
                description: 'Budget-friendly plan with good data allocation'
            },
            {
                price: 399,
                validity: '70 Days',
                data: '1 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                operator: 'BSNL',
                category: 'validity',
                features: ['Free Roaming', 'BSNL Mail', 'Web SMS'],
                description: 'Long validity plan for light data users'
            },
            {
                price: 107,
                validity: '25 Days',
                data: '2 GB/Day',
                calls: 'Unlimited',
                sms: '100/Day',
                popular: false,
                operator: 'BSNL',
                category: 'Budget Best',
                features: ['BSNL Tunes', 'Location Based Services', 'BSNL Mail']
            }
        ];

        await Plan.insertMany(plans);
        res.status(201).json({ message: 'Plans seeded successfully', count: plans.length });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
