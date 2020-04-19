module Jekyll::ParseImageUrl
  def parseImageUrl(url)
    url.slice(/http.+[^)]/)
  end
end

Liquid::Template.register_filter(Jekyll::ParseImageUrl)
