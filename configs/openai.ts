import { Configuration, OpenAIApi } from 'openai';

const chatGPT = () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  return openai.createCompletion({
    model: 'gpt-3.5-turbo',
  });
};

export default chatGPT;
