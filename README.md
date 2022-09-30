# how to build the image locally  
1. clone this repo

2. build backend  
```
cd uber-eats-clone/uber-eats-backend && docker-compose up -d --build
```

3. Access to GraphQL from Here  
・http://localhost:10041/graphql/

4. build frontend  
```
cd ../uber-eats-clone/uber-eats-frontend && docker-compose up -d --build
```

5. Access to page from Here  
・http://localhost:10051/login/
