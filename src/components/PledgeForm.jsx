import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import "./PledgeForm.css";

function PledgeForm({ projectId }) {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [formData, setFormData] = useState({
    amount: "",
    comment: "",
    anonymous: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pledges/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${auth.token}`,
        },
        body: JSON.stringify({
          project: projectId,
          amount: Number(formData.amount),
          comment: formData.comment,
          anonymous: formData.anonymous,
        }),
      });

      if (response.ok) {
        // Clear form and optionally refresh the project
        setFormData({ amount: "", comment: "", anonymous: false });
        window.location.reload(); // You might want to handle this more elegantly
      }
    } catch (error) {
      console.error("Error submitting pledge:", error);
    }
  };

  return (
    <form className="pledge-form" onSubmit={handleSubmit}>
      <h3>Make a Pledge</h3>
      <div className="form-group">
        <label htmlFor="amount">Hours to Contribute</label>
        <input
          type="number"
          id="amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
          min="1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="comment">Comment (Optional)</label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
        />
      </div>

      <button type="submit">Submit Pledge</button>
    </form>
  );
}

export default PledgeForm;
