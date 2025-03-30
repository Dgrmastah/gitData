import UserInfo from "./components/userInfo";
import UserSearch from "./components/userSearch";

function App() {
  return (
    <div>
      <h1>Buscador de Usuarios de GitHub</h1>
      <UserSearch/>
      <UserInfo/>
    </div>
  );
}

export default App;
