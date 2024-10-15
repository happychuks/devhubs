import Button from "@/components/Button";
const ProfilePage = () => {
    // Fetch user profile data from API and manage updates here
    return (
      <div className="p-4 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        {/* Add form for profile management */}
        <div className="mt-4">
          <form className="space-y-4">
            {/* Add profile fields here */}
            <input
              type="text"
              placeholder="Update your name"
              className="block w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 transition"
            />
            <Button>Update Profile</Button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;
  