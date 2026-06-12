# Vibify 🎧

A modern music streaming web application built with React, Vite, Tailwind CSS, and React Router.

---
## Overview

Vibify is a frontend music streaming application focused on providing a clean, responsive, and interactive listening experience.

Users can:

* Browse tracks
* Discover music by genre
* Search songs and artists
* Play tracks from anywhere in the app
* Control playback through a global music player

---

## Tech Stack

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Remix Icons

---

# Features

## Responsive Navigation Bar

### Desktop Layout

* Logo on the left
* Navigation links in the center
* Settings and profile icons on the right

### Mobile Layout

* Logo on the left
* Settings and profile icons on the right
* Bottom Navigation enabled

### Active Link Highlighting

The currently active page is highlighted with a pink accent color using React Router's NavLink component.

**File**

```bash
src/components/Navbar.jsx
```

---

## Mobile Bottom Navigation

Visible only on mobile devices.

Includes:

* Home
* Discover
* Artists
* Liked

The active route is automatically highlighted.

**File**

```bash
src/components/BottomNav.jsx
```

---

# Home Page

The Home page acts as the landing screen of Vibify.

### Dynamic Greeting

The greeting changes based on the user's local time.

Examples:

* Good Morning, Guest
* Good Afternoon, Guest
* Good Evening, Guest
* Late Night Vibes 🎧

### Featured Hero Section

Includes:

* Featured Track Banner
* Background Artwork
* Artist Information
* Play Button
* Hover Animations

### Trending Now Section

Displays a list of available tracks.

Each track shows:

* Cover Image
* Track Name
* Artist Name
* Duration

Users can click any track to instantly start playback.

**Files**

```bash
src/pages/Home.jsx
```

---

# Discover Page

The Discover page helps users find music quickly.

### Search Functionality

Users can search tracks using:

* Track Title
* Artist Name

### Genre Filtering

Available Genres:

* All
* Ambient
* Lo-fi
* Electronic
* Instrumental

Tracks are dynamically filtered based on:

* Selected Genre
* Search Query

### Responsive Music Grid

Grid adapts automatically:

* Mobile → 2 Columns
* Tablet → 3 Columns
* Desktop → 4+ Columns

### Hover Effects

Track cards include:

* Smooth transitions
* Cover image zoom effect
* Hover feedback

**File**

```bash
src/pages/Discover.jsx
```

---

# Global Music Player

The Player Bar is shared across the entire application.

This means users can:

* Start playback from Home
* Navigate to Discover
* Continue listening without interruption

---

## State Management

Global playback state is managed inside App.jsx.

### Current Track

Stores the currently selected song.

```js
const [currentTrack, setCurrentTrack] = useState(tracks[0])
```

### Playback State

Tracks whether music is playing or paused.

```js
const [isPlaying, setIsPlaying] = useState(false)
```

These states are passed to pages and components through props.

---

# How Track Selection Works

### Step 1

User clicks a track card.

### Step 2

The selected track becomes the current track.

```js
setCurrentTrack(track)
```

### Step 3

Playback state changes.

```js
setIsPlaying(true)
```

### Step 4

Player Bar receives updated props.

### Step 5

The selected song starts playing.

---

# Audio System

The Player Bar uses:

```js
useRef(new Audio())
```

to create a single persistent audio instance.

### Why useRef?

The audio object remains the same between renders.

Benefits:

* No unnecessary recreation of audio elements
* Smooth playback
* Better performance
* Easy access to play, pause, and volume controls

---

# Play / Pause Flow

### User clicks Play

```text
Play Button
     ↓
setIsPlaying(true)
     ↓
useEffect runs
     ↓
audio.src updated
     ↓
audio.play()
     ↓
Song starts playing
```

### User clicks Pause

```text
Pause Button
     ↓
setIsPlaying(false)
     ↓
audio.pause()
```

---

# Next & Previous Controls

### Next Button

```text
Find current track index
        ↓
Move to next track
        ↓
Update currentTrack
        ↓
New song loads
```

### Previous Button

```text
Find current track index
        ↓
Move to previous track
        ↓
Update currentTrack
        ↓
New song loads
```

---

## Shuffle Playback Logic

A shuffle feature was added to the music player to play tracks in a random order.

### How It Works

1. When the Shuffle button is clicked, the application first checks if more than one track is available.

2. The index of the currently playing track is found using `findIndex()`.

3. A random index is generated using:

```js
Math.floor(Math.random() * allTracks.length)
```

4. The generated random index is compared with the current track index.

5. If both indexes are the same, a new random index is generated to avoid replaying the currently playing track.

6. Once a different random track is found:

   * The selected track becomes the current track.
   * Playback starts automatically.

### Flow

Shuffle Button Click
→ Find Current Track Index
→ Generate Random Index
→ Check If Same As Current Track
→ If Same, Generate Again
→ Select Random Track
→ Update Current Track
→ Start Playback

### Result

* Tracks play in a random order.
* The currently playing track is not selected again during the same shuffle action.
* Playback starts immediately after a random track is chosen.

## 🔁 Repeat Mode Logic

A repeat feature was implemented in the Player Bar to control playback behavior when a track ends.

### How It Works

1. The repeat button cycles through three modes:

   * None
   * Repeat All
   * Repeat One

2. When the current track finishes playing, the application checks the active repeat mode.

3. Based on the selected mode:

   * **None:** Playback stops.
   * **Repeat All:** The next track starts automatically.
   * **Repeat One:** The same track restarts from the beginning.

4. The progress bar and playback state are updated accordingly to keep the UI synchronized with the audio.

### Flow

Track Ends

→ Check Repeat Mode

→ None → Stop Playback

→ Repeat All → Play Next Track

→ Repeat One → Restart Current Track

### Result

* Users can choose how playback behaves after a song ends.
* Continuous listening is supported through Repeat All mode.
* Individual tracks can be looped using Repeat One mode.
* Audio state and progress tracking remain synchronized during transitions.



# Progress Tracking

The audio element emits:

```js
timeupdate
```

events continuously during playback.

The application calculates:

```js
(currentTime / duration) * 100
```

This value updates the progress bar in real time.

---

# Volume Control

### Volume Slider

Controls audio volume between:

```text
0.0 → Muted
1.0 → Maximum
```

### Mute Button

Toggles:

```js
isMuted
```

and instantly updates the audio volume.

---

# Responsive Player Bar

## Desktop

Left:

* Cover Image
* Track Title
* Artist Name

Center:

* Shuffle
* Previous
* Play / Pause
* Next
* Repeat

Bottom:

* Progress Bar

Right:

* Volume Control
* Mute Toggle

---
## Liked Tracks System

### Overview

Implemented a complete Liked Tracks feature that allows users to like/unlike tracks, persist their preferences using Local Storage, and manage a personalized liked playlist.

### Implementation Flow

1. Added a `liked` property to every track object and initialized it as `false`.

2. Moved track data into React state in `App.jsx`:

```js
const [allTracks, setAllTracks] = useState(tracks)
```

3. Passed `allTracks` and `setAllTracks` through props to different pages that require track management.

4. Added a heart icon to each track and created a `toggleLike(id)` function that:

   * Identifies the clicked track using its `id`
   * Toggles the `liked` state (`true ↔ false`)
   * Updates the track list using `setAllTracks`

5. Used conditional rendering to display:

   * `ri-heart-line` for unliked tracks
   * `ri-heart-fill` for liked tracks

6. Added `e.stopPropagation()` to prevent tracks from playing when users click the heart icon.

### Liked Songs Page

1. Filtered tracks using:

```js
allTracks.filter(track => track.liked)
```

2. Displayed only liked tracks on the Liked page.

3. Added an empty-state UI when no liked tracks are available.

4. Implemented a **Play All** feature:

   * Checks whether liked tracks exist.
   * Plays the first liked track.
   * Shows an alert if no liked tracks are available.

### Local Storage Persistence

1. Saved track data to Local Storage whenever the track state changes.

2. Restored saved data when the application loads.

3. Preserved liked tracks even after page refresh or browser restart.

### Remove From Liked Page

1. Allowed users to unlike tracks directly from the Liked page.

2. Clicking the filled heart:

   * Sets `liked` to `false`
   * Updates React state
   * Updates Local Storage
   * Removes the track from the Liked page instantly

### User Flow

Home Page
→ Like a Track ❤️
→ Track added to Liked Songs
→ Data saved to Local Storage
→ Refresh Page
→ Liked Songs remain saved
→ Open Liked Page
→ Play All or Play Individual Tracks
→ Unlike ❤️
→ Track removed instantly

## Login Flow
User enters email and password.
Basic validation checks if fields are filled.
On successful login:
Email is stored in localStorage.
Login status (isLoggedIn) is stored in localStorage.
User is redirected to the Home page.
If "Remember Me" is enabled, credentials remain saved for future sessions.

## Profile Details Flow
Profile icon checks the user's login status.
If logged in → navigates to Profile Details page.
If not logged in → redirects to Login page.
Profile Details page:
Reads user email from localStorage.
Generates username from the email.
Displays total liked songs dynamically from app state.
Provides Dark Mode and Notifications preference toggles.
Logout:
Clears stored login data from localStorage.
Redirects user back to the Login page.

## Flow Diagram

Login Page
    ↓
Enter Email & Password
    ↓
Store User Data (localStorage)
    ↓
Home Page
    ↓
Profile Icon Click
    ↓
Profile Details
    ↓
View User Info & Preferences
    ↓
Logout
    ↓
Clear localStorage
    ↓
Login Page

### Result

* Users can like and unlike tracks seamlessly.
* Liked tracks persist across page refreshes using Local Storage.
* The Liked page updates automatically based on track state.
* Tracks can be removed directly from the Liked playlist.
* The UI stays synchronized with application state in real time.

## Mobile

Compact layout optimized for smaller screens.

Includes:

* Track Information
* Previous Button
* Play / Pause Button
* Next Button

---

# Project Structure

```bash
src
│
├── components
│   ├── Navbar.jsx
│   ├── BottomNav.jsx
│   └── PlayerBar.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Discover.jsx
│   ├── Artists.jsx
│   ├── Liked.jsx
│
├── data
│   └── track.js
│
└── App.jsx
```

---





Built with ❤️ while learning React and modern frontend development.
