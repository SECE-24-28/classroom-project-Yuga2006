export const getPlans = (operator) => {
  // Dummy data
  const plans = {
    jio: [
      { price: 239, validity: "28 days", data: "1.5GB/day" },
      { price: 299, validity: "28 days", data: "2GB/day" }
    ],
    airtel: [
      { price: 265, validity: "28 days", data: "1.5GB/day" },
      { price: 299, validity: "28 days", data: "2GB/day" }
    ],
    vi: [
      { price: 249, validity: "28 days", data: "1.5GB/day" }
    ]
  };

  return plans[operator];
};
