import { motion } from "framer-motion";

export function WelcomeMessage({ onSignUpClick }) {
  return (
    <span className="welcome-message">
      <h1>Welcome!</h1>
      <p>Register with your personal details to use all features!</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onSignUpClick}
      >
        Sign up
      </motion.button>
    </span>
  );
}
