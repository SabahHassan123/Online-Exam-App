import Image from "next/image";
import user from "assets/images/user.png";

export default function StudentInfo() {
  return (
    <section>
      <Image src={user} alt="user photo" />
    </section>
  );
}
