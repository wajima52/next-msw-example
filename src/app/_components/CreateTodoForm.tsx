'use client'
import {useTodos} from "@/app/_hooks/useTodos";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";


export default function CreateTodoForm() {
  const {todos, isPending, isError, form, isSending, onSubmit} = useTodos()

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel>Todo Content</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Enter your todo name
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending || isSending}>{isSending ? "Adding TODO..." : "Add TODO"}</Button>
        </form>
      </Form>
      {isPending ? (<div>Loading todos...</div>) : todos.length === 0 ? (<div>No todos found</div>) : (
        <ul>
          {todos && todos.map((todo, index) => (
            <li key={index}>・ {todo.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}