def inorder_traversal_with_recursion(root)
   return if root.nil?

    inorder_traversal_with_recursion(root.left)
    print root.val
    inorder_traversal_with_recursion(root.right)
end