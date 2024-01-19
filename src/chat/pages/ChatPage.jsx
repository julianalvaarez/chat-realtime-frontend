import { Chat, Navbar } from "../components";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../../firebase";
import { useState } from "react";

export function ChatPage() {
  const [username, setUsername] = useState('')
  onAuthStateChanged(FirebaseAuth, async (user) => {
    if (user) {
      setUsername(user.displayName)
    }
  })
  return (
    <main>
      <Navbar username={username} />
      <Chat username={username} />
    </main>
  );
}

