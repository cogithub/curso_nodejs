  #!/bin/bash

pm install -g express-generator
express mi-servidor --no-view

cd mi-servidor
npm install
npm start
http://localhost:3000
