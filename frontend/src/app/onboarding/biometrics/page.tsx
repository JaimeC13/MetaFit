import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import BiometricsForm from "@/app/components/BiometricsForm";

export default async function BiometricsPage() {
  const cookieStore = await cookies();
  const userName = cookieStore.get("user_name")?.value || "Atleta";
  const token = cookieStore.get("metafit_token")?.value;

  if (!token) {
    redirect("/auth/register");
  }

  
  return <BiometricsForm userName={userName} />;

}