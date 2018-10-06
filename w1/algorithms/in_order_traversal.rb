def inorder_traversal_with_recursion(root)
   return if root.nil?

    inorder_traversal_with_recursion(root.left)
    print root.val
    inorder_traversal_with_recursion(root.right)
end 



def inorder_traversal_without_recursion(root)
  stack = []
  output = []
  current = root

  while true 
    if !current.nil?
      stack.push(current)
      current = current.left
    else 
      if stack.empty?
        break
      else 
        current = stack.pop
        output.push(current)
        current = current.right
    end 
  end 

  output
end 