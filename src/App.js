import { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { WelcomeMessage } from "./WelcomeMessage";
import { motion } from "framer-motion";

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="App">
      <motion.div className="container" transition={{ duration: 0.5 }}>
        {!showSignUp ? (
          <>
            <SignIn />
            <WelcomeMessage onSignUpClick={() => setShowSignUp(true)} />
          </>
        ) : (
          <SignUp />
        )}
      </motion.div>
    </div>
  );
}
