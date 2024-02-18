---
layout: links
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_links

# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/[language].yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
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


# you can always move this content to _data/content/ folder
# just create new file at _data/content/links/[language].yml and move content below.
###########################################################
#                Links Page Data
###########################################################
page_data:
  main:
    header: "リンク"
    info: "ゲーム開発に役立つリンク。"

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "Unity"
      type: id_unity
      color: "gray"
    - title: "Programming"
      type: id_programming
      color: "#62b462"

  list:
    -
    # programming
    - type: id_programming
      title: "Stack OverFlow"
      url: "https://stackoverflow.com/"
      info: "Stack Overflow is a Q&A website for professional and enthusiast programmers."
    - type: id_programming
      title: "GitHub"
      url: "https://github.com/"
      info: "More than just a code hosting platform, it's also a social platform. You can discover excellent open-source projects created by various experts."

    # unity
    - type: id_unity
      title: "Unity"
      url: "https://unity.com/"
      info: "Versatile game development tool."
    - type: id_unity
      title: "Unity Forum"
      url: "https://forum.unity.com/"
      info: "The official forum for Unity, helping users solve most Unity-related issues."
---
