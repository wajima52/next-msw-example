import {ReactNode} from "react";


export const LeftColumn = ({children}: { children: ReactNode }) => {
  return (
    <div className={"w-3/12 bg-zinc-100"}>
      <div className={"p-3"}>
        {children}
      </div>
    </div>
  )
}