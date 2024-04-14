import {publicFetch} from "@/lib/fetch";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation, useQuery} from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string({required_error: "Name is required"}),
})

export const useTodos = () => {
  const {isPending, isError, data, refetch} = useQuery({queryKey: ["todos"], queryFn: () => fetchTodoList()})

  const todos = data?.todos ?? []
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {name: ""}
  })

  const mutation = useMutation({
    mutationKey: ["create-todo"],
    mutationFn: async (data: z.infer<typeof formSchema>) => await publicFetch("/todo", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }),
    onSuccess: async () => {
      await refetch()
      form.reset()
    }
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => mutation.mutate(data)


  return {
    todos,
    isPending,
    isError,
    form,
    isSending: mutation.isPending,
    onSubmit
  }
}

const fetchTodoList = async () => {
  const res = await publicFetch("/todos")
  return await res.json() as {
    todos: { name: string }[]
  }
}