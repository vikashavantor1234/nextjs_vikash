import { Profile } from "@/app/profile/components/profile";

export default function ProfilePage() {
    const profile = {
        name: 'Subramanian Murugan',
        bio: 'Next.js Trainer | Micro services Consultant | Open Source Contributor'
    }
    return <div>
            <h1 style={{textAlign:'center' ,fontSize:40}}>Profile Manager</h1>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Profile name={profile.name} bio={profile.bio} />
            <Profile name={profile.name} bio={profile.bio} />
            <Profile name={profile.name} bio={profile.bio} />
        </div>
    </div>
}