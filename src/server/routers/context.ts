import { db, auth } from "@/lib";
import { LabhContext } from "@/types";

export const createTRPCContext = async (opts: { headers: Headers }): Promise<LabhContext> => {
  const session = await auth();
  return {
    session,
    user: session?.user,
    db,
    ...opts,
  };
};
