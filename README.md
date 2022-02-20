# hearo: StormHacks 2022

Jordan Zhao, Sophia Kim, Daniel Kim, Johnathan Tam

## App Functionality

hearo is an app designed to solve the problems that arise from hearing aid failures. This tool provides accessibilty and functinality in the day to day and promotes independent living in individuals with hearing impairments. 

In the case that an individuals hearing aid fails, this would cause auditory failure seen in communication with others. The app solves this problem by allowing the individual to quickly resolve hearing failures through means of a visual speech to text stream. It lets the user rely on their other senses to make communication still possible.

With a click of a button, the hearo app initilizes a speech to text stream that picks up the communication heard and produces streamed text such that the individual can read it.


## User Processes and Commands

# react
npm start

# ngrok 
ngrok http 8080

# twilio
twilio login
  - enter Account SID
  - enter Auth Token
twilio phone-numbers:update <My Twilio phone number> --voice-url $NGROK_HTTP_URL <https forwarding address>
  - example: twilio phone-numbers:update--voice-url $NGROK_HTTP_URL https://fa6c-2001-569-5290-6d00-a9e1-3ec6-30c6-2148.ngrok.io
export APIKEY
npm install express ws wavefile
re-direct to project folder
node transcribe.js
  
Dial <My Twilio phone number>
  
Tap to Start
Text Streams Speech to Text
End Stream 
  
Finish
