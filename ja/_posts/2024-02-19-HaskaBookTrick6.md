---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: HaskaBookReportTrick6
title: 小哈片刻 ゲームデザインXアルゴリズムXTypeScript Trick 6

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author:
# multiple category is not supported
category: ゲームデザインXアルゴリズム
# multiple tag entries are possible
tags: [GameDesign, BookReport, GLSL]
# thumbnail image for post
img: ":HaskaBook/Trick6.gif"
# disable comments on this page
#comments_disable: true

# publish date
date: 2024-02-20 22:00:00 +0800
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

色空間について

<!-- outline-end -->

## 色空間

最も一般的な色彩空間はおそらく RGB です；
8 ビット（0〜255）の 3 つの数字[255, 255, 255]で構成されており、それぞれが赤（Red）、緑（Green）、青（Blue）を表します。

時には、第四の次元としてアルファ値（透明度）が追加され、RGBA [255, 255, 255, 255]になり、4 つの 8 ビットで合計 32 ビットの値となります。整数で保存でき、16 進数で表現することもよくあります。例：0xFF_FF_FF_FF。

コンピュータグラフィックスの分野では、RGB 色空間が非常に便利です。なぜなら、RGB の原理は人間の視覚システムの原理と類似しているからです。

![RGB Color Space](:HaskaBook/RGBSpace.png)

しかし、利用可能な色空間は RGB だけではありません。理論的には、飽和度が 100％で、色の間隔が 120 度の任意の 3 色が原色として機能することができます。

## HSV 色空間

もう 1 つのよく使われる色空間は HSV です。

- 色相（Hue）は色の基本的な特性であり、一般的に色の名前として知られています。例：赤、黄など。
- 彩度（Saturation）は色の純度を示し、高いほど色がより純粋になり、低いほど段々と灰色になります。0〜100％の値を取ります。
- 明度（Value）、明るさ（Lightness）、明度（Brightness）はすべて 0〜100％の値を取ります。

P.S. この本では、HSB と呼ばれ、Value の代わりに Brightness が使用されています。

HSV を使用する最大の理由は、多くの色彩理論技術が HSV 色空間に基づいているためです。補色、三分色、補色分割、類似色など。

![Color Theory](:HaskaBook/HSBDergree.png)

## 実装

ここでの実装は、[ShaderToy](https://www.shadertoy.com/view/lXB3WR){:target="\_blank"}というウェブサイトで[GLSL](https://zh.wikipedia.org/zh-tw/GLSL){:target="\_blank"}を使用して行われています。

コードは以下の通りです：

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

結果

![Results](:HaskaBook/Trick6.gif)

### Explanation

```GLSL
    vec2 uv = fragCoord/iResolution.y;
    vec3 black = vec3(0.0);
    vec3 white = vec3(1.0);
    uv *= 2.;
    uv -= 1.;
    uv.x -= .75;
```

まず、座標を望む位置に調整します。

```GLSL
    float yStep = step(0., uv.y);
    vec3 color = vec3(uv, 0.);
    color = mix(black, white, yStep);
```

色を上白下黒に分ける主な目的は、背景色が異なる場合に、視覚的な違いを比較することです。

```GLSL
    float rStep = step(.4, length(abs(uv) - vec2(0.5, 0.5)));
```

次に、円の範囲を決定します。座標（±0.5、±0.5）の距離が 0.4 未満の範囲が円となります。

```GLSL
    float xStep = step(0., uv.x);
```

この部分は、円が X 軸の左側にあるか右側にあるかを決定し、左側で RGB を描画し、右側で HSV を描画します。

```GLSL
    float colorT = (sin(iTime * 1.5) + 1.) / 2.;
    vec3 circleColRBG = mix(StartCol, EndCol, colorT);
    vec3 circleColHSB = mix(RGB2HSV(StartCol), RGB2HSV(EndCol), colorT);
    circleColHSB = HSV2RGB(circleColHSB);
```

最後に、Mix を使用して Tween の効果を適用します。Mix の動作は、実際には内挿です。

![interpolation](:HaskaBook/1D_linear_interpolation.jpg)

$$ P = P*{1} \cdot (1 - t) + P*{2} \cdot t $$

vec3 の内挿は、（x、y、z）のそれぞれの位置の数値に対して行われます。

RGB は直接内挿できますが、HSV に変換してから内挿し、内挿した値を再度 RGB に変換する必要があります。

## Comparison of Results

![Results](:HaskaBook/Trick6.gif)

左側の RGB がグラデーション変化する際、中間部分で全体の色が一時的に下がり、深い茶色になることがわかります。一方、HSV の変化は常に高い明度の色を維持していますが、一度だけ赤でも緑でもない色になります。どちらの効果がより良いかは、アートチームに尋ねる必要があります。どちらがより適しているかは、製品のスタイルによって異なります。
