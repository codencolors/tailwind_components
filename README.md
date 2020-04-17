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

install => npm install -g live-server

server code using

live-server public/ ("keep all your file inside public folter");


-------------
<!-- Button -->
Created Buttons with @apply and made a btn class for any type of button

For use simple button use
class="btn"

-----------
<!-- Slider js -->
```Dot_cicle created in css/tailwind.js
Can be usuable for other slider'sg

Created < left arrow and right arrow >
components can be usuable with 
class "arrow_btn";
```

```
Topbar with responsive dropdown along with navigation button
```
```html 
<li class="relative px-6 py-3 tracking-wider dropdown-btn">Dropdown<span></span>
                    <ul class="absolute left-0 w-40 text-base bg-gray-100 dropdown-cont">
                        <li class="px-4 py-2">Link 1</li>
                        <li class="px-4 py-2">Link 2</li>
                        <li class="px-4 py-2">Link 3</li>
                    </ul>
                </li>
```

