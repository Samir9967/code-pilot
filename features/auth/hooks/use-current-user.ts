// import { useCurrentUser } from "../hooks/use-current-user";
// export const useCurrentUser = ()=>{
//     const session = useSession();
    
//     return session?.data?.user
// }

"use client";

import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};