import { useQuery } from '@tanstack/react-query'

function PostsList() {
  const url = `https://jsonplaceolder.typicode.com/posts`
  async function getData(){
    const data = await fetch(url)
    const res = await data.json()
    return res
  }
    const {data,isLoading,isError} = useQuery({
      queryKey:['Posts-List'],
      queryFn:getData
    })
  if(isError) return <h1 className='w-full text-center font-bold text-2xl'>Error</h1>
  if(isLoading) return <h1 className='w-full text-center text-2xl font-bold'>Loading</h1>
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default PostsList