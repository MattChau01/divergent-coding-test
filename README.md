# EscapeRoom

## :gear: setup
side note: after cloning repository in VS Code, type the following in the terminal. Only need to do this once after repo is cloned.

```shell
npm i

# OR YOU CAN USE THE FOLLOWING

npm install
```

## :running: running code

If using `React` to build components, must `run build` or `run dev`. Do this by typing the following in another terminal:
```shell
npm run dev
# THIS RUNS DEV (PAGE REFRESHES EACH TIME NEW CODE IS SAVED)


npm run build
# THIS 'RUNS THE BUILD' ONCE. IF NEW CODE IS SAVED, YOU MUST USE 'npm run build' AGAIN TO SEE UPDATES MADE
```
## building components

- Add a new file inside the `components` directory and rename it to a `nameOfFile.jsx`
- Inside of the `component`, import `React` at the top.

```shell

import React from 'react';

function FUNCTION() {
  return (
    <div>
      content here
    </div>
  )
}

```
