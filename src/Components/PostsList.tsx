import { useQuery } from '@tanstack/react-query'
import { Post } from './Form'
import Z from "zod"
import { newSchema } from '../zod/schema'
function PostsList() {
  const url = `https://jsonplaceholder.typicode.com/posts`
  async function getData(){
    const data = await fetch(url)
    const res = await data.json()
    const result = Z.array(newSchema).safeParse(res)
    if(!result.success){
      throw new Error("Not Correct Format")
    }
    return result.data
  }
    const {data,isLoading,isError} = useQuery({
      queryKey:['Posts-List'],
      queryFn:getData
    })
  if(isError) return <h1 className='w-full h-screen text-center font-bold text-2xl'>Error</h1>
  if(isLoading) return <h1 className='w-full h-[100vh] flex items-center justify-center text-center text-2xl font-bold'>Loading</h1>
  return (
    <div>
      <ul>
        {data?.map((task:Post)=>{
          return <li key={task.id}>
              <div>User Id:{task.userId}</div>
              <div>Task id:{task.id}</div>
              <div>Title:{task.title}</div>
              <div>Body:{task.body}</div>
              <br/>
            </li>         
        })}
      </ul>
    </div>
  )
}

export default PostsList