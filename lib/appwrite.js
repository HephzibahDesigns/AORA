import { Client, Databases, Account, ID, Avatars } from "react-native-appwrite";
import { toast } from "./toast";
import { createContext, useContext, useEffect, useState } from "react";
import { router } from "expo-router";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.hephzibah.aora",
  projectId: "66b9e2f50024dc0f7ff6",
  databaseId: "66b9e5bd00322c6c1b88",
  userCollectionId: "66b9e5fd0007abea2ab8",
  videoCollectionId: "66b9e64d000c7b1b11b4",
  storageId: "66ba6fb2000ad994ff7a",
};

const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId) // Replace with your project ID
  .setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

// Create Context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = async (email, password, username) => {
    try {
      console.log("Creating user with email:", email);

      const newAccount = await account.create(
        ID.unique(),
        email, // Ensure the email is passed here
        password, // Ensure the password is passed here
        username
      );

      if (!newAccount) throw new Error("Failed to create account");

      const avatarUrl = avatars.getInitials(username);

      await login(email, password);

      // create new user in the database
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountID: newAccount.$id,
          email,
          username,
          avatar: avatarUrl,
        }
      );

      toast("Account created");
      console.log("New user created:", newUser);
      setUser(newUser);
      // return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      toast(error.message);
      throw new Error(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const currentSession = await account.getSession("current");
      setUser(currentSession);
      toast("You're already logged in.");
    } catch (error) {
      try {
        const newSession = await account.createEmailPasswordSession(
          email,
          password
        );
        setUser(newSession);
        toast("Welcome back!");
      } catch (err) {
        toast("Login failed: " + err.message);
        throw err;
      }
    }
  };

  const logout = async () => {
    try {
      const deleteSession = await account.deleteSession("current");

      if (deleteSession) {
        console.log("session deleted");
        setUser(null);
        toast("Logged out successfully");
      }
    } catch (error) {
      console.error(error);
      toast(error.message);
      throw new Error(error.message);
    }
  };

  async function init() {
    try {
      const currentSession = await account.get();
      setUser(currentSession);
      toast("Welcome back. You are logged in");
      router.push("/home");
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, createUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

// import { Client, Databases, Account, ID, Avatars } from "react-native-appwrite";
// import { toast } from "./toast";

// export const appwriteConfig = {
//   endpoint: "https://cloud.appwrite.io/v1",
//   platform: "com.hephzibah.aora",
//   projectId: "66b9e2f50024dc0f7ff6",
//   databaseId: "66b9e5bd00322c6c1b88",
//   userCollectionId: "66b9e5fd0007abea2ab8",
//   videoCollectionId: "66b9e64d000c7b1b11b4",
//   storageId: "66ba6fb2000ad994ff7a",
// };

// const client = new Client();
// client
//   .setEndpoint(appwriteConfig.endpoint)
//   .setProject(appwriteConfig.projectId)
//   .setPlatform(appwriteConfig.platform);

// export const account = new Account(client);
// export const databases = new Databases(client);
// const avatars = new Avatars(client);

// export const createUser = async (email, password, username) => {
//   try {
//     console.log("Creating user with email:", email);

//     const newAccount = await account.create(
//       ID.unique(),
//       email,
//       password,
//       username
//     );

//     if (!newAccount) throw new Error("Failed to create account");

//     const avatarUrl = avatars.getInitials(username);

//     await login(email, password);

//     const newUser = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       ID.unique(),
//       {
//         accountID: newAccount.$id,
//         email,
//         username,
//         avatar: avatarUrl,
//       }
//     );

//     toast("Account created");
//     console.log("New user created:", newUser);
//     return newUser;
//   } catch (error) {
//     console.error("Error creating user:", error);
//     toast(error.message);
//     throw new Error(error.message);
//   }
// };

// export async function login(email, password) {
//   try {
//     const currentSession = await account.getSession("current");
//     console.log("A session is already active.");
//     toast("You're already logged in.");
//     return currentSession;
//   } catch (error) {
//     if (error.code === 401) {
//       const session = await account.createEmailPasswordSession(email, password);
//       toast("Welcome back. You are logged in.");
//       return session;
//     } else {
//       console.log(error);
//       toast("An error occurred during login.");
//       throw new Error(error.message);
//     }
//   }
// }

// export async function logout() {
//   try {
//     await account.deleteSession("current");
//     console.log("Session deleted");
//     toast("Logged out successfully");
//   } catch (error) {
//     console.error(error);
//     toast(error.message);
//     throw new Error(error.message);
//   }
// }
