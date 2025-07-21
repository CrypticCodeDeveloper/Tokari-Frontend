
export const genCodeSnippets = (apiKey) => {

    return [
  {
    language: "Js (axios)",
    code: `

      const axios = require("axios");

(async () => {
  try {
    const AIresponse = await axios.post(
      "http://localhost:5500/api/v1/chat-completions",
      {
        role: "You are a helpful assistant.",
        prompt: "Help me write a poem about nature.",
      },
      {
        headers: {
          "x-api-key": "${apiKey}",
        },
      }
    );

    console.log(AIresponse.data.response);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
})();


    `,
  },
  {
    language: "Python (Requests)",
    code: `import requests

url = "http://localhost:5500/api/v1/chat-completions"
headers = {
    "x-api-key": "${apiKey}"
}
data = {
    "role": "You are a helpful assistant.",
    "prompt": "Help me write a poem about nature."
}

try:
    response = requests.post(url, json=data, headers=headers)
    response.raise_for_status()
    print(response.json()["response"])
except requests.exceptions.RequestException as e:
    print("Error:", e)
`,
  },
  {
    language: "cURL (Command Line)",
    code: `curl -X POST http://localhost:5500/api/v1/chat-completions \
  -H "x-api-key: ${apiKey}" \
  -H "Content-Type: application/json" \
  -d '{
        "role": "You are a helpful assistant.",
        "prompt": "Help me write a poem about nature."
      }'
`,
  },
  {
    language: "PHP (cURL)",
    code: `<?php
$url = "http://localhost:5500/api/v1/chat-completions";
$data = [
    "role" => "You are a helpful assistant.",
    "prompt" => "Help me write a poem about nature."
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'x-api-key: ${apiKey}'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);

echo $response;
`,
  },
  {
    language: "Node.js (Native http module)",
    code: `const http = require("http");

const data = JSON.stringify({
  role: "You are a helpful assistant.",
  prompt: "Help me write a poem about nature."
});

const options = {
  hostname: "localhost",
  port: 5500,
  path: "/api/v1/chat-completions",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(data),
    "x-api-key": "${apiKey}",
  },
};

const req = http.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => {
    body += chunk;
  });
  res.on("end", () => {
    console.log("Response:", body);
  });
});

req.on("error", (error) => {
  console.error("Error:", error);
});

req.write(data);
req.end();
`,
  },
  {
    language: "C# (.NET with HttpClient)",
    code: `using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        client.DefaultRequestHeaders.Add("x-api-key", "${apiKey}");

        var json = "{\"role\":\"You are a helpful assistant.\",\"prompt\":\"Help me write a poem about nature.\"}";
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await client.PostAsync("http://localhost:5500/api/v1/chat-completions", content);
        var responseString = await response.Content.ReadAsStringAsync();

        Console.WriteLine("Response: " + responseString);
    }
}
`,
  },
  {
    language: "Ruby (Using net/http)",
    code: `require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("http://localhost:5500/api/v1/chat-completions")

header = {
  "Content-Type" => "application/json",
  "x-api-key" => "${apiKey}"
}

body = {
  role: "You are a helpful assistant.",
  prompt: "Help me write a poem about nature."
}.to_json

http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Post.new(uri.request_uri, header)
request.body = body

response = http.request(request)
puts "Response: #{response.body}"
`,
  },
];

}