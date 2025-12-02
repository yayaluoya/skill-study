import * as z from "zod";
import { createAgent, initChatModel, tool } from "langchain";

const getWeather = tool(
  (input) => `It's always sunny in ${input.city}!`,
  {
    name: "get_weather",
    description: "Get the weather for a given city",
    schema: z.object({
      city: z.string(),
    }),
  },
);

const model = await initChatModel('',{
  baseURL: 'https://api.openai.com/v1',
});

const agent = createAgent({
  model,
  tools: [getWeather],
});

console.log(
  await agent.invoke({
    messages: [{ role: "user", content: "What's the weather in Tokyo?" }],
  })
);