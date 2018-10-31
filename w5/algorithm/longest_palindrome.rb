# Non-Optimal Solution - best case O(N), worst case O(N^2)

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

def palindrome_at_position(s, left, right)  
  palindrome = ""  
  while (right < s.length &&  
      left >= 0 &&  
      s[left] == s[right])  
   palindrome = s[left,(right-left+1)]  
   left -= 1  
   right += 1  
  end  
  palindrome   
 end  

#  Optimal Solution - Linear time O(N)
 def longest_palindrome(str)  
   palindrome_lengths = {}  
   center = right = 0  
   # This gsub changes a string "abc" into "~a~b~c~"
   # This is done to avoid the problem of even length palindromes    
   processed_str = str.gsub(/(\w|$)/, '~\1')  
   0.upto (processed_str.length - 1) do |i|  
     i_mirror = center - (i - center)  
     if (right > i)  
       palindrome_lengths[i] = [right-i, palindrome_lengths[i_mirror]].min  
     else  
       palindrome_lengths[i] = 0  
     end
     while (processed_str[i + 1 + palindrome_lengths[i]] == processed_str[i - 1 - palindrome_lengths[i]])
       palindrome_lengths[i] += 1
     end
     if (i + palindrome_lengths[i] > right)  
       center = i;  
       right = center + palindrome_lengths[i];  
     end  
   end  
   max = palindrome_lengths.values.max  
   center_index = palindrome_lengths.key(max)  
   str[(center_index - max)/2, max]  
 end