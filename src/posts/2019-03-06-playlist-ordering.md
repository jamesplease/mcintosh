# Playlist Ordering

Playlists on iOS and macOS use a different sorting algorithm. On iOS, playlists that begin with numbers appear
before playlists that begin with alphabetic characters. On macOS, it is the opposite.

### Why is this a problem?

Sorting logic for the same data should be consistent across platforms unless there's good reason to change it.
