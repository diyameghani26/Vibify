# Vibify 🎧

✅ Features Built -

1. Navbar (Responsive)

Desktop: Logo left | Nav links center | Icons right

Mobile: Logo left | Settings + Profile right

How it works: Active navigation links are highlighted in pink to show which page the user is currently on.

Files: src/components/Navbar.jsx

2. Bottom Navigation (Mobile Only)

4 buttons: Home, Discover, Artists, Liked
Fixed at bottom 
Active state: Pink highlight
Files: src/components/BottomNav.jsx

3. Player Bar (Fully Working)

Desktop Version:

Left: Track thumbnail + name + artist
Center: Shuffle | Prev | Play/Pause | Next | Repeat
Right: Volume icon + slider
Progress bar below


Mobile Version:

Left: Track info (compact)
Right: Play + Next button
Progress bar below


How it works:

HOW THE PLAYER WORKS:

1. STATE MANAGEMENT (useState)
   - isPlaying: Tracks if song is currently playing or paused
   - progress: Tracks how much of the song has played (0-100%)
   - volume: Tracks volume level (0 to 1)
   - currentTrack: Stores which song is playing

2. AUDIO ELEMENT ACCESS (useRef)
   - useRef gives direct access to the HTML audio player
   - Like having a remote control to the speaker
   - Can call: play(), pause(), change volume, seek to time.

   
*** I used useRef(new Audio()) to store a single audio player that stays the same even when the component re-renders. This allows me to control playback, pause, and track changes without creating a new audio object every time the component re-renders.


 3. When User Clicks Play (useEffect Flow)

- User clicks the Play button.
- `handlePlay()` toggles the `isPlaying` state.
- `isPlaying` changes from `false` to `true`.
- The `useEffect` hook detects the change in `isPlaying`.
- The current track's audio src is assigned to the audio player.
- `audio.play()` is called.
- The selected track starts playing.
- The UI updates and the Play icon changes to a Pause icon.

Note: The Play button does not directly play the audio. It only updates the `isPlaying` state. The actual playback is handled inside `useEffect`.

4. PROGRESS TRACKING (timeupdate event)
   - As the song plays, the audio element fires "timeupdate" event
   - This happens many times per second
   - We calculate: (currentTime / totalDuration) * 100
   - Progress bar width updates based on this percentage
   - Shows how much of song has played

5. WHEN USER CLICKS NEXT
   - Next button clicked
   - currentTrack updates to next song
   - useEffect detects currentTrack changed
   - New audio loads
   - New song starts playing
   - Player bar shows new song info

6. VOLUME CONTROL
   - User moves volume slider
   - volume state updates (0.0 to 1.0)
   - Audio element's volume property changes
   - Speaker volume increases or decreases


Files: src/components/PlayerBar.jsx