---
title: "photos"
layout: "photos"
url: "/photos/"
summary: photos
disableShare: true
resources: 
  src: "gallery/*.png"
  name: gallery-:counter
  title: gallery-title-:counter
---
{{< gallery folder="gallery" title="gallery" >}}