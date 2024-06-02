import { useAuth } from "@clerk/nextjs";

export function useClerkAuth() {
  // const session = useAuth();
  const session = {
    isSignedIn: false,
    sessionId: "sessionId",
    userId: "userId",
  };
  console.log(
    "use clerk auth",
    session.isSignedIn,
    session.sessionId,
    session.userId
  );
  return session;
}
