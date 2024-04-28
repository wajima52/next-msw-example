import React from "react";
import Link from "next/link";

export const TaskManagementBlock = () => {
  const links  = [
    {
      href: "/",
      label: "検索"
    },
    {
      href: "/",
      label: "インボックス"
    },
    {
      href: "/",
      label: "今日"
    },
    {
      href: "/",
      label: "近日予定"
    },
    {
      href: "/",
      label: "フィルター&ラベル"
    }
  ]
  return (
    <div className={"py-3"}>
      <div className={"font-bold"}>タスク管理</div>
      <ul>
        {links.map((link, index) => (
          <li key={index} className={"my-1 hover:bg-red-200 hover:text-red-600"}>
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}