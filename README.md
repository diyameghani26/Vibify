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
## Liked Tracks Logic Flow

1. Added a `liked` property to every track object and initialized it as `false`.

2. Moved tracks data into React state in `App.jsx` using:

```js
const [allTracks, setAllTracks] = useState(tracks)
```

3. Passed `allTracks` and `setAllTracks` to the Home page through props.

4. Added a heart icon for each track in the track list.

5. Created a `toggleLike(id)` function that:

   * Finds the clicked track using its `id`
   * Toggles its `liked` state (`true ↔ false`)
   * Updates the tracks state using `setAllTracks`

6. Used conditional rendering to switch between:

   * `ri-heart-line` for unliked tracks
   * `ri-heart-fill` for liked tracks

7. Added `e.stopPropagation()` to prevent the track from playing when the heart icon is clicked.

### Result

* Clicking the heart icon likes a track.
* Clicking it again removes it from liked tracks.
* The UI updates instantly based on the track's `liked` state.

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

## Current Status

Completed:

* Responsive Navbar
* Bottom Navigation
* Home Page
* Discover Page
* Search Functionality
* Genre Filtering
* Global Music Player
* Track Selection
* Progress Tracking
* Volume Controls
* Responsive Layouts
* Hover Animations

Upcoming:

* Liked Songs Logic
* Artist Pages
* Playlist Support
* Queue Management
* Recently Played
* Advanced Audio Controls

---

Built with ❤️ while learning React and modern frontend development.
