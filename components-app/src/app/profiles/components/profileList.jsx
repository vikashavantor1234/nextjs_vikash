import { PROFILES } from "@/app/mock-data/profile";
import Address from "@/app/profiles/components/address";

export default function ProfileList(){
    return <>
        <div>
            {PROFILES.map(profile=>{
                return <section key={profile.id}>
                    <h1> Id: {profile.id}</h1>
                    <h2>{profile.name}</h2>
                    <h2>{profile.email}</h2>
                    <h2>{profile.phone}</h2>
                    <Address address={profile.address}/>
                </section>
            } )}
        </div>
    </>

}