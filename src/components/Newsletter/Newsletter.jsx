import { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <span className="newsletter-label">
          STAY IN THE LOOP
        </span>

        <h2>
          SOMETHING NEW
          <br />
          IS COMING.
        </h2>

        <p>
          Get early access to new collections,
          exclusive pieces and stories from Velora.
        </p>

        {!submitted ? (
          <form
            className="newsletter-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">
              JOIN →
            </button>
          </form>
        ) : (
          <p className="newsletter-success">
            THANK YOU — YOU'RE ON THE LIST.
          </p>
        )}

      </div>

    </section>
  );
};

export default Newsletter;