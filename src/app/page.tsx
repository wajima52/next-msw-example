import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import CreateTodoForm from "@/app/_components/CreateTodoForm";
import {LeftColumn} from "@/app/_components/layout/LeftColumn";
import {RightColumn} from "@/app/_components/layout/RightColumn";
import {AccountBlock} from "@/app/_components/organizms/AccountBlock";
import {TaskManagementBlock} from "@/app/_components/organizms/TaskManagementBlock";


export default async function Home() {

  return (
    <main className="flex">
      <LeftColumn >
        <AccountBlock />
        <TaskManagementBlock />
      </LeftColumn>
      <RightColumn>
        <Card>
          <CardHeader>
            <CardTitle>TODO List</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateTodoForm />
          </CardContent>
        </Card>
      </RightColumn>
    </main>
  );
}
