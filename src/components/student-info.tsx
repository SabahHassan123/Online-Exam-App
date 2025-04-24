import Image from "next/image";
import user from '@/../puplic/images/user.png';

export default function StudentInfo (){
    return(
        <section>
            <Image src={user} alt="user photo" />
        </section>
    )
}