# Setup Tailwind Project

npm init -y (creates a package.json file)

npm install tailwindcss postcss-cli autoprefixer

npx tailwind init (create tailwind.config.js file)

create a new file "postcss.config.js" and paste the following code

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
};

create a file /css/tailwind.css

paste the follwing

@tailwind base;
@tailwind components;
@tailwind utilities;

Then open package.json
change "test" under "scripts" to => "build" : "postcss css/tailwind.css -o public/build/tailwind.css"

then run

npm run build

link the file in you webpage to use it


--------

For live server use npm package "live-server"

install => npm install -g liver-server

server code using

live-server public/ ("keep all your file inside public folter");


-------------
Created Buttons with @apply and made a btn class for any type of button

For use simple button use
class="btn"