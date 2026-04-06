"use server"; 
import { authService } from "@/app/service/AuthService";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function registerUserAction(formData: any) {
  try {
    const response  = await authService.register(formData);

        console.log("Respuesta del Backend:", response);


      if (response && response.token) {

        
        (await cookies()).set("metafit_token", response.token, {
            httpOnly: true, 
            secure:false, 
            maxAge: 3600, 
            path: "/",  
        });

        if (response.firstName) {
        (await cookies()).set("user_name", response.firstName, { 
            maxAge: 3600,
            secure:false, 
            path: "/" 
        });

    }
      
      }

    return { success: true, firstName: response.firstName};

  } 
  
  catch (e: any) {
    
    return { success: false, error: e.message };
  }


}