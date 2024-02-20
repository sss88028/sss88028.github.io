---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: HaskaBookReportTrick6
title: 小哈片刻 遊戲設計X演算法XTypeScript Trick 6

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author:
# multiple category is not supported
category: 遊戲設計X演算法
# multiple tag entries are possible
tags: [GameDesign, BookReport, GLSL]
# thumbnail image for post
img: ":HaskaBook/Trick6.gif"
# disable comments on this page
#comments_disable: true

# publish date
date: 2024-02-19 22:00:00 +0800
# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false
---

<!-- outline-start -->

關於顏色色彩空間以及其變化的比較

<!-- outline-end -->

## 色彩空間

最常見的色彩空間莫屬為 RGB 了；
由三個 8bit(0~255)數字組成[255, 255, 255] 分別表示 Red(紅色), Green(綠色), Blue(藍色)。

有時會在加上第四維作為 Alpha 值(透明度) 變成 RGBA[255, 255, 255, 255]，變成 4 個 8bits 共 32Bits 的值，可以用一個 int 來儲存，也經常用 16 進位表達 e.g. 0xFF_FF_FF_FF。

在電腦圖學領域，RGB 色彩空間非常便利，因為 RGB 的原理與人類視覺系統的原理類似。

![RGB色彩空間](:HaskaBook/RGBSpace.png)

但能使用的色彩空間空間不只有 RGB，理論上只要是飽和度 100%、色彩間隔 120 度的任意三個顏色都能當作三原色。

## HSV 色彩空間

另一個會用到的色彩空間則是 HSV

-色相（Hue）是色彩的基本屬性，就是平常所說的顏色名稱，如紅色、黃色等。 -飽和度（Saturation）是指色彩的純度，越高色彩越純，低則逐漸變灰，取 0-100%的數值。 -明度（Value）、亮度（Lightness）、亮度（Brightness），取 0-100%。

P.S.在[書中]({% post_url 2023-11-21-HaskaBookReport %})是稱呼 HSB，用 Brightness 取代 Value。

用 HSV 最大的理由就是很多色彩學技巧是依據 HSV 的色彩空間，像是互補色、三分色、補色分割、相似色等。

![色彩學](:HaskaBook/HSBDergree.png)

## 實作

這邊實作是透過[GLSL](https://zh.wikipedia.org/zh-tw/GLSL){:target="\_blank"}在[ShaderToy](https://www.shadertoy.com/view/lXB3WR){:target="\_blank"}這個網站上實作。

程式碼如下

```GLSL
const vec3 StartCol = vec3(1.0, .0, .0);
const vec3 EndCol = vec3(.0, 1.0, .0);

vec3 HSV2RGB(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 RGB2HSV(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.y;
    vec3 black = vec3(0.0);
    vec3 white = vec3(1.0);
    uv *= 2.;
    uv -= 1.;
    uv.x -= .75;

    float yStep = step(0., uv.y);
    vec3 color = vec3(uv, 0.);
    color = mix(black, white, yStep);

    float rStep = step(.4, length(abs(uv) - vec2(0.5, 0.5)));
    float xStep = step(0., uv.x);

    float colorT = (sin(iTime * 1.5) + 1.) / 2.;
    vec3 circleColRBG = mix(StartCol, EndCol, colorT);
    vec3 circleColHSB = mix(RGB2HSV(StartCol), RGB2HSV(EndCol), colorT);
    circleColHSB = HSV2RGB(circleColHSB);

    vec3 circleCol = mix(circleColRBG, circleColHSB, xStep);

    color = mix(circleCol, color, rStep);

    fragColor = vec4(color,1.0);
}
```

成果

![成果](:HaskaBook/Trick6.gif)

### 解說

```GLSL
    vec2 uv = fragCoord/iResolution.y;
    vec3 black = vec3(0.0);
    vec3 white = vec3(1.0);
    uv *= 2.;
    uv -= 1.;
    uv.x -= .75;
```

首先先將座標調整至想要的位置

```GLSL
    float yStep = step(0., uv.y);
    vec3 color = vec3(uv, 0.);
    color = mix(black, white, yStep);
```

把顏色分為上白下黑主要是想比較當背景顏色不同時做顏色漸變時對視覺造成的差異。

```GLSL
    float rStep = step(.4, length(abs(uv) - vec2(0.5, 0.5)));
```

再來是決定圓的範圍 距離座標(±0.5, ±0.5)距離小於 0.4 的範圍即為圓。

```GLSL
    float xStep = step(0., uv.x);
```

這段則是決定圓是在 X 軸左邊還是右邊 X 左邊繪製 RGB 的轉換右邊繪製 HSV 的轉換。

```GLSL
    float colorT = (sin(iTime * 1.5) + 1.) / 2.;
    vec3 circleColRBG = mix(StartCol, EndCol, colorT);
    vec3 circleColHSB = mix(RGB2HSV(StartCol), RGB2HSV(EndCol), colorT);
    circleColHSB = HSV2RGB(circleColHSB);
```

最後就是用 Mix 做 Tween 的效果 Mix 做的行為其實就是就是內插。
![內插](:HaskaBook/1D_linear_interpolation.jpg)

$$ P = P_{1} \cdot (1 - t) + P_{2} \cdot t $$

vec3 的內插就是(x, y, z)每個位置的數各自做內插。

RGB 就直接內插即可 HSV 要先從 RGB 轉為 HSV 後內插 內插完的值再從 HSV 轉回 RGB。

## 成果比較

![成果](:HaskaBook/Trick6.gif)

可以看到左邊的 RGB 做漸變效果時 中間有一度整體的色彩會掉下去 變成一種深褐色；
而 HSV 的變化就是一直維持著高亮度的顏色，但有一度會變得不像紅也不像綠的顏色；
至於哪種效果會比較好就得問問 Team 上的美術了，哪種比較好其實是種主觀的評論，哪種比較適合要看產品的風格。
