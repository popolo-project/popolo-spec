require 'csv'
require 'json'

require 'haml'

task default: :terms

desc 'Generate the tables in terms.md'
task :terms do
  def path(*parts)
    File.expand_path(File.join(*parts), __dir__)
  end

  def render(filename, locals)
    Haml::Engine.new(File.read(path('src', filename))).render(Object.new, locals)
  end

  template = File.read(path('src', 'terms.md'))

  rows = CSV.read(path('src', 'namespaces.csv'))
  template.sub!('&namespaces', render('namespaces.haml', headers: rows[0], namespaces: rows.drop(1)))

  prefixes = rows.drop(1).map(&:first)

  {
    person: [
      'Person',
      'identifiers',
      'email address',
      'gender',
      'date of birth',
      'date of death',
      'head shot',
      # 'one-line biography',
      'biography',
      'national identity',
      'external links',
      'name',
      'alternate name',
      'former name',
      'family name',
      'given name',
      'additional name',
      'honorific prefix',
      'honorific suffix',
    ],
    organization: [
      'Organization',
      'name',
      'alternate name',
      # 'former name',
      'identifier',
      'classification',
      'child organization',
      'founding date',
      'dissolution date',
      # 'image',
    ],
    membership: [
      'Membership',
      # 'label',
      'role',
      'person',
      'organization',
      'start date',
      'end date',
    ],
    post: [
      'Post',
      'label',
      'role',
      'organization',
      'person',
      # 'date of creation',
      # 'date of elimination',
    ],
    address: [
      'Address',
      'address type',
      'postal address',
      'telephone',
    ],
  }.each do |klass,terms|
    vocabularies = JSON.load(File.read(path('src', "#{klass}.json")))
    vocabularies.each do |vocabulary,entries|
      difference = entries.keys - terms
      unless difference.empty?
        raise "#{klass} #{vocabulary} unknown terms: #{difference.join(', ')}"
      end
    end
    template.sub!("&#{klass}", render('terms.haml', namespaces: prefixes, terms: terms, vocabularies: vocabularies))
  end

  File.open(path('appendices', 'terms.md'), 'w') do |f|
    f.write(template)
  end
end
