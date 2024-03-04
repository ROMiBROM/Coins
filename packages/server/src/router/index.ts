import {trpc} from "../lib/trpc";
import { departmentRouter } from "./DepartmentRouter";

export const appRouter = trpc.router({
 department: departmentRouter,
}
);

export type AppRouter = typeof appRouter;