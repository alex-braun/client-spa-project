#Drum Machine

This is my project programmable drum sequencer app.  This will
playback the user created rhythmic patterns the user  and will allow the
user to save these patterns to be recalled whenever a user is signed in.

#Why a drum machine?

My first thoughts about a web-based sequencer date back to before I became a
developer.  When practicing on a guitar, I wished I was able to access a drum
machine through my computer on the fly to program or load up drum beats to practice
along to.  Using actual recording or playback software usually requires a user
to close all other programs, or the program uses too many system resources to
be able to do anything else on the computer simultaneously. Also, a user's audio
program will usually be dedicated to a particular computer, so a user would be
unable to create these drum beats on any other computer.
Online metronomes are available, but the sound quality is usually poor.
I believe that this device would be welcome to any practicing musician with web
access who wants to create drum rhythm patterns quickly and easily.  I also think
that a broader audience of the public would enjoy this app for entertainment
purposes.


#Please see my by wirframe:
http://imgur.com/a/iRCxP

#My Ruby on Rails API backend:
https://github.com/alex-braun/DrumMachineRails
My Rails backend is based on a one-to-many relationship of users to their beats.

CRUD commands for the users' requests for beats are as follows:

GET all user beats      beat#index
GET a beat              beat#show
POST a new beat         beat#create
PATCH an existing beat  beat#update
DELETE a user beat      beat#destroy

All requests are performed via AJAX.
My 'beat' object contains an array of boolean values that are stringified on calls
to the server and parsed on receipt.  The boolean values at this time represent
simple on/off values.  In the future, this could easily be expanded upon to include
numerical values for volume levels.  Simple and somewhat limited, but my goal
for this project was to create something as clean and simple as possible without
sacrificing user accessibility.

```
'beat': {
  'kick': [boolean, boolean, etc..]
  'snare': [boolean, boolean, etc..]
  'hatClose': [boolean, boolean, etc..]
  'hatOpen': [boolean, boolean, etc..]
  'clap': [boolean, boolean, etc..]
  'user_id': integer
  },
};

```
Please see the Rails API link for much more detail on the authorization process.


#User stories:
-I want an app that allows me to quickly and easily create drum beats.
-It should have an adjustable tempo meter.
-This drum machine should be able to store my rhythm patterns, and after
signing in, I should be able to call any of those patterns up.
-Ideally, I want to be able to have at least two of my saved patterns stored
that I can choose from during playback.
-I need this to keep time as accurately as possible!
-I want to be able to share my drum beats with other users.

Currently, this drum machine does not play back sounds--I had 6 days to make this
wprk from start to finish!
This project is still ongoing so please check back soon!
