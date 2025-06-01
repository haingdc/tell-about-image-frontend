docker build -t tell-about-image-frontend .

docker run -it -p 3000:3000 tell-about-image-frontend

flyctl launch

fly deploy

[Upgrade Next.js](https://nextjs.org/docs/app/getting-started/upgrading)

```terminal
# By npx:
npx @next/codemod@canary upgrade latest
# By deno:
deno run npm:@next/codemod@canary upgrade latest
```
