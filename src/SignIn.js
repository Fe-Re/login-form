import Icons from "./Icons";
import eye from "./image/eye.png";
import eyeClosed from "./image/eye-closed.png";
import { useState } from "react";
import { motion } from "framer-motion";

export function SignIn() {
  const [pwVisible, setPwVisible] = useState(false);

  function togglePwVisibility() {
    setPwVisible(!pwVisible);
  }

  return (
    <span className="sign-in">
      <h1>Sign In</h1>
      <Icons />
      <p>or use your account</p>
      <form>
        <label>
          <input type="email" placeholder="E-Mail" />
        </label>
        <br />
        <label>
          <input
            type={pwVisible ? "text" : "password"}
            placeholder="Password"
          />
          <img
            className="eye"
            src={pwVisible ? eyeClosed : eye}
            width="25px"
            alt=""
            onClick={togglePwVisibility}
          />
        </label>
        <br />
        <a href="/">Forget your password?</a>
        <br />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          Sign In
        </motion.button>
      </form>
    </span>
  );
}
