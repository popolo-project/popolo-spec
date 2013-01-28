# https://gist.github.com/481456
# https://gist.github.com/960150
module Jekyll
  require 'sass'

  class SassConverter < Converter
    safe true
    priority :low

     def matches(ext)
      ext =~ /sass/i
    end

    def output_ext(ext)
      '.css'
    end

    def convert(content)
      engine = Sass::Engine.new(content, :syntax => :sass)
      engine.render
    end
  end

  class ScssConverter < Converter
    safe true
    priority :low

     def matches(ext)
      ext =~ /scss/i
    end

    def output_ext(ext)
      '.css'
    end

    def convert(content)
      engine = Sass::Engine.new(content, :syntax => :scss)
      engine.render
    end
  end
end
