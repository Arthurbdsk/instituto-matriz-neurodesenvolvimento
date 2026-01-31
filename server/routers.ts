import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { invokeLLM } from "./_core/llm";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  chat: router({
    ask: publicProcedure
      .input(
        z.object({
          message: z.string(),
          context: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const response = await invokeLLM({
            messages: [
              {
                role: "system",
                content:
                  input.context ||
                  "Você é a Nora, mascote do Instituto Matriz de Neurodesenvolvimento. Responda de forma amigável, profissional e concisa sobre o Instituto. Se não souber a resposta, sugira que o usuário entre em contato pelo telefone (11) 98464-0809.",
              },
              {
                role: "user",
                content: input.message,
              },
            ],
          });

          const answer =
            response.choices?.[0]?.message?.content ||
            "Desculpe, não consegui processar sua pergunta.";

          return {
            answer: typeof answer === "string" ? answer : JSON.stringify(answer),
          };
        } catch (error) {
          console.error("[Chat] Error invoking LLM:", error);
          return {
            answer:
              "Desculpe, tive um problema ao processar sua pergunta. Por favor, tente novamente ou entre em contato conosco pelo telefone (11) 98464-0809.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
