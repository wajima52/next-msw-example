import {http, HttpResponse} from "msw";

const todos = [
  {
    name: "皿を洗う"
  },
  {
    name: "洗濯"
  }
]


export const handlers = [
  http.get('/todos', () => {
    return HttpResponse.json({
      todos: todos
    })
  }),
  http.post("/todo", async ({request}) => {
    const json = await request.json() as { name: string }
    const todo = {name: json.name}
    if (!todo.name) {
      return HttpResponse.json({
        error: "Name is required"
      }, {
        status: 400
      })
    }
    todos.push(todo)
    return HttpResponse.json({
      todos: todos
    }, {
      status: 201
    })
  })

  ]