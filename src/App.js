import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { WelcomeMessage } from "./WelcomeMessage";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SignIn />
        <WelcomeMessage />
      </div>
    </div>
  );
}
