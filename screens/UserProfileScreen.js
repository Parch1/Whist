import React from 'react';
import Profile from "../components/Profile";

export default function UserProfileScreen({navigation, route}) {
  const user = route.params;
  return <Profile user={user}/>;
}
