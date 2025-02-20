import Icons from "./Icons";

export function SignIn() {
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
          <input type="password" placeholder="Password" />
        </label>
        <br />
        <a href="/">Forget your password?</a>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </span>
  );
}
