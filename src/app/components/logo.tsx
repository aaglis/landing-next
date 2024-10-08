import Image from "next/image";
import LogoImage from '../../../public/logo.png'

export default function Logo() {
    return (
        <Image
            src={LogoImage}
            alt="Logo"
            width={150}
        />
    );
}