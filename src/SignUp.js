import Icons from "./Icons";

export function SignUp() {
  return (
    <div className="SignUp">
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
