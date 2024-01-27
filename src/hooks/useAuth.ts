import { useState, useEffect, useMemo } from "react";
import Swal from "sweetalert2";

export const useAuth = () => {
  const usersKey = "users";
  const activeUserKey = "activeUser";
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [activeUser, setActiveUser] = useState<any | null>(null);

  useEffect(() => {
    try {
      // Fetch users from local storage on component mount
      const users =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem(usersKey) || "[]")
          : [];

      setAllUsers(users);

      // Fetch active user from local storage
      const storedActiveUser =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem(activeUserKey) || "null")
          : null;

      setActiveUser(storedActiveUser);
    } catch (error) {
      console.error("Error fetching users or active user:", error);
    }
  }, []);

  const loginUser = useMemo(
    () => (credentials: { email: string; password: string }) => {
      try {
        const user = allUsers.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          setActiveUser(user);
          // Save active user to local storage
          localStorage.setItem(activeUserKey, JSON.stringify(user));

          // Show success message using SweetAlert
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "You have successfully logged in.",
          });
        } else {
          // Show error message using SweetAlert
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Invalid email or password. Please try again.",
          });
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
    [allUsers]
  );

  const logoutUser = () => {
    setActiveUser(null);
    // Remove active user from local storage on logout
    localStorage.removeItem(activeUserKey);

    // Show success message using SweetAlert
    Swal.fire({
      icon: "success",
      title: "Logout Successful!",
      text: "You have successfully logged out.",
    });
  };

  return { activeUser, loginUser, logoutUser };
};
