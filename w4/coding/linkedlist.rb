class LinkedList
  def initialize(val)
  @head = Node.new(val, nil)
end

def add(val)
  current = @head
  while current.next != nil
        current = current.next
  end
  current.next = Node.new(val, nil)
end

def delete (val)
  current.next = @head
  if current.val = val
      @head = current.next
  else
    while (current.next != nil) && (current.next.val != val)
      current = current.next
    end
    unless current.next == nil
    current.next = current.next.next
    end
  end
end

