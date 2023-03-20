cd ./client 
npm i
npm run build
rm ./../server/public/*
mv ./build/* ./../server/public/
cd ./../server
npm i
NODE_ENV=prod npm run start