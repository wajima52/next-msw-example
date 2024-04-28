import {ReactNode} from "react";


export const RightColumn = ({children}: { children: ReactNode }) => {
  return (
    <div className={"w-9/12"}>
      {children}
    </div>
  )
}