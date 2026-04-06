"use server";
import { redirect } from "next/dist/client/components/navigation";
import { cookies } from "next/dist/server/request/cookies";

 


export default async function biometricsAction() {
     const cookieStore = await cookies();
     const token = cookieStore.get("metafit_token");
     const userName = cookieStore.get("user_name");

     if (!token) {
        redirect("/auth/register");
     }

     
}