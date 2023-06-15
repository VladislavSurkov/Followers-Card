import { useDispatch } from "react-redux";
import Card from "./components/UserCards/UserCards";
import { useEffect } from "react";
import { fetchUsers } from "redux/users/users-operations";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div >
      <Card/>
    </div>
  );
}

export default App;
