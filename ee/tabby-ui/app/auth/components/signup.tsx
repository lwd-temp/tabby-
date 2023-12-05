"use client"

import { UserAuthForm } from "./user-auth-form"
import { useGraphQL } from "@/lib/hooks/use-graphql"
import { getIsAdminInitialized } from "@/lib/gql/request-documents"

export default function Signup() {
  const { data } = useGraphQL(getIsAdminInitialized)
  const title = data?.isAdminInitialized ? "Create an account" : "Create an admin account"

  return (
    <div className="space-y-6 w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials below to create account
        </p>
      </div>
      <UserAuthForm />
    </div>
  )
}
