import LoginLine from "./LoginLine";
import NavBody from "./NavBody";

function Nav() {
  return (
    <div className="w-screen fixed z-50">
      <LoginLine />
      <NavBody />
    </div>
  );
}

export default Nav;
