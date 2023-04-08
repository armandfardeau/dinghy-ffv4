require "byebug"

images = Dir.glob("{content,static}/**/*.{jpg,jpeg,png,gif}").each_with_object({}) do |path, hash|
  path_without_extension, extension = path.split(".")
  if hash[path_without_extension].is_a?(Array)
    hash[path_without_extension] << extension
  else
    hash[path_without_extension] = [extension]
  end
end

duplicates = images.select { |_k,v| v.size > 1 }

raise "Duplicate images found #{duplicates}" if duplicates.any?

images.each do |path_without_extension, extensions|
  next if File.exist?("#{path_without_extension}.webp")

  system("convert #{path_without_extension}.#{extensions.first} -quality 50 #{path_without_extension}.webp")
end