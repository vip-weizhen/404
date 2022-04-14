const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404</title>
    <link href="https://cdn.jsdelivr.net/gh/vip-weizhen/404/css/style.css" rel="stylesheet">
</head>
<body>

    <div class="mars"></div>
    <img src="https://cdn.weizhen.xyz/https://raw.githubusercontent.com/vip-weizhen/404/main/images/404.svg" class="logo-404">
    <img src="https://cdn.weizhen.xyz/https://raw.githubusercontent.com/vip-weizhen/404/main/images/meteor.svg" class="meteor">
    <p class="title">Oh no!!</p>
    <p class="subtitle">
        页面未找到<br>要么请求一个不再在这里的页面。
    </p>
    <div align="center">
        <a class="btn-back" href="#">返回上一页</a>
    </div>
    <img src="https://cdn.weizhen.xyz/https://raw.githubusercontent.com/vip-weizhen/404/main/images/astronaut.svg" class="astronaut">
    <img src="https://cdn.weizhen.xyz/https://raw.githubusercontent.com/vip-weizhen/404/main/images/spaceship.svg" class="spaceship">

</body>
</html>`
async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}



addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})

