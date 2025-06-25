import Image from "next/image";

export default function PicsPage() {
    return <div>
        <Image src="/file.svg" alt="This is file Image" height={100} width={100} />
        <Image src="/window.svg" alt="This is file Image" height={100} width={100} />
    </div>
}