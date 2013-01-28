# https://gist.github.com/481456
module Jekyll
  require 'haml'

  class HamlConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /haml/i
    end

    def output_ext(ext)
      '.html'
    end

    def convert(content)
      engine = Haml::Engine.new(content)
      engine.render
    end
  end
end