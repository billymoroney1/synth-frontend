# Synth

## About

This is a full-stack application that explores the Tone.js package. Users can make accounts, login/logout, explore and save synthesizer presets, and access/update/delete all of their presets. 

### Back End Repo

https://github.com/billymoroney1/synth-backend

### What is synthesis? What is a preset?

Summarizing what sound design entails is tricky, but in short, making a sound requires manipulating a sound source. In this app, you can pick the type of wave form for your sound source, adjust the envelope settings, choose between a high and low pass filter, toggle effects, and choose a pitch. 

When you find a sound you like, you can give it a name and save it. When you return to that sound from your profile, the page will populate with the settings you saved. 

## Tech Stack

The front end is a React application using Nextjs and Tailwind CSS. The audio tools depend on the Tone.js package. (Deployed to Vercel)

The backend uses Express, Mongoose, MongoDB Atlas, and is deployed on Heroku. 

## Signal Flow

MonoSynth -> Envelope -> Filter -> Effects -> Destination

## Goals for future changes/additions:

Had difficulty understanding the scope of the Web Audio API and how/whether we could compartmentalize the Tone.js scripts. For example, we want to figure out how to use audio data to manipulate HTML Canvas elements, and bolster the UI to give the user many more options and flexibility. The trick will be understanding if there is a cleaner way to manipulate the many states involved, whether it involves a redesign of the component tree or could benefit from a global state manager. 

Another big challenge was figuring out if/how to access the preset information on a separate page where users could make sequences. There is so much to add that was far beyond the scope of this project, but we look forward to exploring more in the future.

## To test and change locally:

Clone this repo and in terminal run

```
npm i
npm run dev
```

Then open localhost:3000

## Wireframe

### ERD
##### API: synth-backend.herokuapp.com/

| Endpoints | CRUD Action | Description |
| --- | --- | --- |
| api/presets/all/:idx | GET | all of a users presets |
| api/presets/:idx | GET | a single preset |
| api/presets/preset | POST | create a preset |
| api/presets/preset | PUT | update a preset |
| api/presets/preset | DELETE | delete a preset |


