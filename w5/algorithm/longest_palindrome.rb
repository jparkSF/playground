def find_longest_palindrome(s)  
  longest = ""  
  0.upto s.length do |i|  
   odd = palindrome_at_position(s, i, i)  
   longest = odd if odd.length > longest.size  
   # handle even length palindromes  
   even = palindrome_at_position(s, i, i+1)  
   longest = even if even.length > longest.size  
  end  
  longest  
 end

