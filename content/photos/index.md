---
title: "photos"
layout: "photos"
url: "/photos/"
summary: photos
disableShare: true
resources: 
  src: "images/*.png"
  name: gallery-:counter
  title: gallery-title-:counter
---
{{< gallery folder="images" title="My Gallery" >}}