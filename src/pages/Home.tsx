import { useDispatch, useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import { decrement, increment } from "../store/slices/persistedslice";

function Home({ serverData }) {
  const count = useSelector((state) => state.persisted.value);
  const dispatch = useDispatch()
  return (
    <PageWrapper>
      <h1>Welcome to the Home Pages</h1>

      {serverData && (
        <div>
          <h2>Server Data:</h2>
          <h2>Count: {count}</h2>
          <button onClick={() => dispatch(increment())}>add</button>
          <button onClick={() => dispatch(decrement())}>minus</button>
          <pre>{JSON.stringify(serverData, null, 2)}</pre>
        </div>
      )}
    </PageWrapper>
  );
}

// This function will be called on the server before rendering
Home.fetchData = async () => {
  // Simulate an API call
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

export default Home;
