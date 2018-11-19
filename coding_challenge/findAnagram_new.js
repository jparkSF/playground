let makeAnagram = (a,b) => {


  
}


def makeAnagram(a, b)

counter = [0] * 26
a.each_char do | ch |
  counter[ch.ord - 'a'.ord] += 1
    end

b.each_char do | ch |
  counter[ch.ord - 'a'.ord] -= 1
    end

counter.inject{| diff, el | diff += el.abs }

end



str1 = "bcadeh"
str2 = "hea"
makeAnagram(str1, str2)




