import { createTRPCRouter, publicProcedure } from "../init";

export const backlogRouters = createTRPCRouter({
  all: publicProcedure
    //   .input(getAllSubjectsSchema)
    //
    .query(async (q) => {
      // console.log(q.ctx.)
      // return await getAllSubjects(q.ctx, q.input);
      return {
        message: "Hello World",
      };
    }),
  getByClassroom: publicProcedure
    // .input(getClassroomSubjectsSchema)
    .query(async ({ input, ctx: {} }) => {
      return {
        message: "Hello World",
      };
      //   return await getClassroomSubjects(db, input);
    }),
});
