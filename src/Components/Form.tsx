import { useState } from "react"
import { newSchema } from "../zod/schema"
import z from "zod"
import { useMutation } from "@tanstack/react-query"
export type Post = z.infer<typeof newSchema>

function Form() {
  const [post, setPost] = useState<Post>({
    id: 0,
    userId: 0,
    title: "",
    body: ""
  })
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPost((prev: Post) => {
      return { ...prev, [e.target.name]: e.target.name === "id" || e.target.name === "userId" ? Number(e.target.value) : e.target.value }
    })
  }
  async function createPost(post:Post){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      body:JSON.stringify(post),
      headers:{
        'content-type': 'application/json'
      }
    })
    const res = await data.json()
    return res
  }
  const mutation = useMutation({
    mutationFn:createPost,
    onSuccess: (data) => {
      console.log("Post created successfully!", data);
      alert("Post Created Successfully!");
    },
    onError: (error) => {
      console.error("Error creating post:", error);
      alert("Failed to create post!");
    },
  })
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = newSchema.safeParse(post)
    if (!result.success) {
      throw new Error("Wrong Format")
    }
    const res =await mutation.mutateAsync(result.data)
    console.log(res)
  }
  return (
    <div className="p-4">
      <form onSubmit={submitHandler} className="flex flex-col">
        <label htmlFor="">userid</label>
        <input onChange={changeHandler} className="border-1 border-black w-1/2" type="" name="userId" />
        <label htmlFor="">id</label>
        <input onChange={changeHandler} className="border-1 border-black w-1/2" type="" name="id" />
        <label htmlFor="">title</label>
        <input onChange={changeHandler} className="border-1 border-black w-1/2" type="" name="title" />
        <label htmlFor="">body</label>
        <input onChange={changeHandler} className="border-1 border-black w-1/2" type="" name="body" />
        <button className="w-1/2 border px-6 py-2 rounded-md ">Submit</button>
      </form>
    </div>
  )
}

export default Form