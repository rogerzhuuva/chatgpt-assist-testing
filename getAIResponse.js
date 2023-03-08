function getAIResponse(prompt) {
  fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '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'
    },
    body: JSON.stringify({
      'prompt': prompt,
      'max_tokens': 50,
      'temperature': 0.7,
      'n': 1,
      'stop': '\n'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the AI response
  })
  .catch(error => console.error(error));
}
