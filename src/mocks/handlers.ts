import {delay, http, HttpResponse} from "msw";

const todos = [
  {
    name: "皿を洗う"
  },
  {
    name: "洗濯"
  },
  {
    name: "掃除"
  }
]


export const handlers = [
  http.all('*', async () => await delay(300)),
  http.get('/todos', () => {
    return HttpResponse.json({
      todos: todos
    })
  }),
  http.post<{}, {name: string}>("/todo", async ({request}) => {
    const json = await request.json()
    return createTodo(json.name)
  })
]

const createTodo = (name: string) => {
  const todo = {name: name}
  if (!todo.name) {
    return HttpResponse.json({
      error: "Name is required"
    }, {
      status: 400
    })
  }
  todos.unshift(todo)
  return HttpResponse.json({
    todo: todo
  }, {
    status: 201
  })
}