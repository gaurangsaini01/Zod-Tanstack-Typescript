import Form from "./Components/Form"
import PostsList from "./Components/PostsList"

function App() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Form />
      </div>
      <div className="w-1/2">
        <PostsList />
      </div>
    </div>
  )
}

export default App