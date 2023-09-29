const API_KEY = "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"
console.log("API_KEY", API_KEY)
export async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      // prompt: "give a random example of programming language",
      prompt: prompt,
      max_tokens: 20,
    }),
  });

  const data = await response.json();
  console.log(data)
  return data;
}

// getCompletion("hola dame las buenas tardes")