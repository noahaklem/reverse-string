def reverse_string(str)
  reversed = ""
  str.chars.each do |c|
    reversed = c + reversed
  end
  reversed
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  puts 
  
  puts "Expecting: 'elloh'"
  puts "=>", reverse_string('hello')
end

# Please add your pseudocode to this file
# build a functin called reverse_string
#   function takes an argument of a string 
#   for each letter in string 
#     add to a new string
#   end
#   return the new string
# end
# And a written explanation of your solution

# set a new_string variable equal to an empty string
#   you need to seperate each character in the string
#   for each character in the string want to add it to the beginning of the new_string
# then return the new_string variable once finished