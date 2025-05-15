import { redirect } from "next/navigation";

export default function Home() {
  redirect("/signin"); // Such redirect (in this case) is better to be handeled in next.config.mjs
}
