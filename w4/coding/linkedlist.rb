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
