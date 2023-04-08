# .gsub methods is same as replace method


text = "Hello, world!"

text_without_comma = text.gsub(",", "") # => "Hello world!"

# .reduce method looks like js redude method

number = [1,2,3,4,5]

sum = numbers.reduce {|total, number| total + number} # => 15

# .select method looks like filter method

numbers = [1,2,3,4,5]

even_numbers = mumbers.select {|number| number.even?} # => [2,4]

# .map method is like iteration

numbers = [1,2,3,4,5]
 squares = numbers.map {|number| number * number} 
 # => [1, 4, 9, 16, 25]