import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import CreateTodoForm from "@/app/_components/CreateTodoForm";


export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <Card>
          <CardHeader>
            <CardTitle>TODO List</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateTodoForm />
          </CardContent>
        </Card>
    </main>
  );
}
