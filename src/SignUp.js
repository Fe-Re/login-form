import Icons from "./Icons";
import { motion } from "framer-motion";

export function SignUp() {
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <Icons />
      <p>or use your email for registration</p>
      <form>
        <label>
          <input type="text" placeholder="Name" />
        </label>
        <br />
        <label>
          <input type="email" placeholder="E-Mail" />
        </label>
        <br />
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <br />
        <label>
          <input type="password" placeholder="Re-enter Password" />
        </label>
        <br />
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Sign up
        </motion.button>
      </form>
    </div>
  );
}
