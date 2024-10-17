import { ProfilePage } from "@/components";
import { auth } from "@/lib";
import { Session } from "next-auth";

async function Profile() {
  const { user } = (await auth()) as Session;

  return (
    <ProfilePage image={user.image} name={user.name} email={user.email}/>
  );
}

export default Profile;
