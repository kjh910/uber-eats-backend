#!/bin/sh
docker cp uber_eats_backend:/app/node_modules ./node_modules
npm run start:dev