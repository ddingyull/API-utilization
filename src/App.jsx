// import './App.css';
import Login from ''
import Auth from ''
import Todo from ''

function App() {
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<Auth />}/>
      <Route path="/todo" element={<Todo />}/>
    </Routes>
  )
}

export default App;
