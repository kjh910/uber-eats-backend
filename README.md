# how to build the image locally  
1. clone this repo

2. build backend  
```
cd uber-eats-clone/uber-eats-backend && docker-compose up -d --build
```

3. Access to GraphQL from Here  
(Please wait to finish to building container maybe 3~4 minutes).  
・http://localhost:10041/graphql/

4. If you can access http://localhost:10041/graphql/, please build to frontend  
(Please wait to finish to building container maybe 3~4 minutes).  
```
cd ../uber-eats-clone/uber-eats-frontend && docker-compose up -d --build
```

5. Access to page from Here  
・http://localhost:10051/login/
