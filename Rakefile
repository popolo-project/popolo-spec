require 'csv'
require 'json'

require 'haml'

desc 'Generate the tables in terms.md'
task :default do
  def path(*parts)
    File.expand_path(File.join(*parts), __dir__)
  end

  def render(filename, locals)
    Haml::Engine.new(File.read(path('src', "#{filename}.haml"))).render(Object.new, locals)
  end

  template = File.read(path('src', 'terms.md'))

  rows = CSV.read(path('src', 'data', 'namespaces.csv'))
  template.sub!('&namespaces', render('namespaces', headers: rows[0], namespaces: rows.drop(1)))

  prefixes = rows.drop(1).map(&:first)

  {
    person: [
      'Person',
      'identifier',
      'email address',
      'gender',
      'date of birth',
      'date of death',
      'head shot',
      'one-line biography',
      'biography',
      # 'national identity',
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
      'image',
    ],
    membership: [
      'Membership',
      # 'label',
      'role',
      'person',
      'organization',
      'post',
      'start date',
      'end date',
    ],
    post: [
      'Post',
      'label',
      'role',
      'organization',
      'person',
      'date of creation',
      'date of elimination',
    ],
    address: [
      'Address',
      'address type',
      'postal address',
      'telephone',
    ],
    motion: [
      'Motion',
      'organization',
      'session',
      'creator',
      'title',
      'description',
      'text',
      'classification',
      'object',
      'proposal date',
      'publication date',
      'resolution date',
      'requirement',
      'result',
      'vote events',
    ],
    voteevent: [
      'Vote event',
      'identifier',
      'title',
      'motion',
      'session',
      'start time',
      'end time',
      'counts',
      'votes',
    ],
    count: [
      'Count',
      'option',
      'value',
      'group',
    ],
    vote: [
      'Vote',
      'voter',
      'area',
      'group',
      'option',
      'role',
      # 'weight',
      # 'pair',
    ],
    area: [
      'Area',
      'name',
      'identifier',
      'classification',
      'parent_id',
      'geometry',
    ],
    speech: [
      'Speech',
      'speaker',
      'speaker label',
      'addressee',
      'text',
      'audio',
      'start time',
      'end time',
      'role',
      'classification',
      'position',
      'title',
      'collection',
    ],
  }.each do |klass,terms|
    vocabularies = JSON.load(File.read(path('src', 'data', "#{klass}.json")))
    vocabularies.each do |vocabulary,entries|
      difference = entries.keys - terms
      unless difference.empty?
        raise "#{klass} #{vocabulary} unknown terms: #{difference.join(', ')}"
      end
    end
    template.sub!("&#{klass}", render('terms', namespaces: prefixes, terms: terms, vocabularies: vocabularies))
  end

  File.open(path('appendices', 'terms.md'), 'w') do |f|
    f.write(template)
  end
end

desc 'Count terms'
task :size do
  class_size = 0
  top_level_class_size = 0
  properties = Hash.new(0)
  Dir['schemas/*'].each do |file|
    json = JSON.load(File.read(file))
    if json
      class_size += 1
      if json['properties']['id']
        top_level_class_size += 1
      end
      json['properties'].each do |property,_|
        properties[property] += 1
      end
    end
  end
  puts "Classes: #{class_size} (#{top_level_class_size} top-level)"
  puts "Properties: #{properties.values.reduce(:+)} (#{properties.size} unique)"
end
