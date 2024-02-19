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
tags: [GameDesign, Python, BookReport]
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

最常見的色彩空間莫屬為RGB了；
由三個8bit(0~255)數字組成[255, 255, 255] 分別表示 Red(紅色), Green(綠色), Blue(藍色)。

有時會在加上第四維作為Alpha值(透明度) 變成RGBA[255, 255, 255, 255]。

在電腦圖學領域，RGB色彩空間非常便利，因為RGB的原理與人類視覺系統的原理類似。

![RGB色彩空間](:HaskaBook/RGBSpace.png)

但能使用的色彩空間空間不只有RGB，理論上只要是飽和度100%、色彩間隔120度的任意三個顏色都能當作三原色。

## HSV色彩空間

