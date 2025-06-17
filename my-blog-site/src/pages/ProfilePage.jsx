import './ProfilePage.css';
import profilePic from '../assets/profile.jpg';

function ProfilePage() {
  return (
    <div className="profile-page">
      <img src={profilePic} alt="Profile" />
      <h1>John Doe</h1>
      <p>This is the user profile page for John Doe. He writes about React, JavaScript, and Web Development.</p>
    </div>
  );
}

export default ProfilePage;
