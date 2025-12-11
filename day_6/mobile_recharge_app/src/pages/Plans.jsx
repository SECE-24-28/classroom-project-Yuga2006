import { useParams } from "react-router-dom";
import { getPlans } from "../services/api";
import PlanCard from "../components/PlanCard";

export default function Plans() {
  const { operator } = useParams();
  const plans = getPlans(operator);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textTransform: "capitalize" }}>{operator} Recharge Plans</h1>
      {plans && plans.length > 0 ? (
        <div style={{ marginTop: "30px" }}>
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      ) : (
        <p>No plans available for this operator</p>
      )}
    </div>
  );
}
