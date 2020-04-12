import React from 'react';
import Profile from "../components/Profile";

export default function ProfileScreen({navigation, route}) {
  const user = route.params?.user;

  if (!user) {
    return <Profile user={{
      username: 'John Doe'
    }} />;
  } else {
    return <Profile user={user}/>;
  }
}
