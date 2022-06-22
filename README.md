## Brayn Coding Challenge

### About this project

This project was created for Brayn.io coding challenge.
You can check the demo [here](https://brayn-test-ky9ta3eax-jeanmbt.vercel.app/)

### Technologies

This project was developed with the following technologies:

- NextJs
- Mui
- TypeScript


### Installing

If you wish to download the code and run the project locally.
**Cloning the Repository**

```
git clone git@github.com:jeanmbt/brayn-test.git
cd brayn-test
```

**Installing dependencies**

Node version: 18.1.0

```
npm i
```

**Adding Enviroment files**

Add your own authentication.
- Notice that any '$' must be escaped with a `\`.
- NEXT_PUBLIC_GRANT_TYPE=password can be kept as is.


```
touch .env.local  && echo -e "
NEXT_PUBLIC_USERNAME=add_username
NEXT_PUBLIC_PASSWORD=add_password_with_escaped_chars
NEXT_PUBLIC_CLIENT_ID=add_client_id
NEXT_PUBLIC_CLIENT_SECRET=add_client_secret
NEXT_PUBLIC_GRANT_TYPE=password
" >> ./.env.local
```


**Serving**
 
```
next dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
